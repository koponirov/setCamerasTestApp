Тестовое задание:

Реализовать небольшое SPA-приложение для работы с картой на React. Интерфейс должен
представлять из себя встроенную на всю страницу карту (https://leafletjs.com/) с наложенным на нее
изображением схемы строительной площадки (пример изображения -
https://static.tildacdn.com/tild3965-6139-4564-b262-303737393665/_8.jpg).
При двойном клике на карту добавляется новая камера и справа открывается панель (Drawer) с
формой для редактирования параметров новой камеры. При клике по объекту камеры на карте так
же открывается панель с формой для редактирования существующей камеры.

Реализованы функции:
1.Добавление камер, при двойном клике на карте;
2.При клике на созданную камеру (синий круг) открывается панель с формой с данными камеры;
3.В открывшейся панели можно удалить выбранную камеру кликом по соответствующей кнопке;
4.Также, в панели, в поле "дальность обзора"  можно изменить числовое значение данного параметра текущей камеры, чтобы применить изменение нужно кликнуть по кнопке "Сохранить"

* SPA реализовано при помощи React&Redux и библиотек ReduxForm и React-Leaflet