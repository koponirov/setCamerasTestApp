import L from 'leaflet'
import { ExtendableMarker } from 'react-leaflet-extendable/dist/react-leaflet-extendable'
import { withLeaflet } from 'react-leaflet'

const proto_setPos = L.Marker.prototype._setPos

const LeafletMarker = L.Marker.extend({
    _setPos(pos) {
        proto_setPos.call(this, pos)
        this._setRotation(this.options.rotation)
    },
    _setRotation(rotation) {
        if (rotation) {
            this._icon.style[L.DomUtil.TRANSFORM + 'Origin'] = this.options.rotationOrigin || 'center'
            const transform = this._icon.style[L.DomUtil.TRANSFORM] + ` rotate(${rotation}deg)`
            this._icon.style[L.DomUtil.TRANSFORM] = transform
        }
    },
})

const createRotatedMarker = (pos, options) => {
    return new LeafletMarker(pos, options)
}

class RotatedMarker extends ExtendableMarker {
    createLeafletElement() {
        return createRotatedMarker(this.props.position, { ...this.props })
    }
}

export default withLeaflet(RotatedMarker)