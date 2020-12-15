import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Cookies from 'js-cookie';

// the translations
const resources = {
    en: {
        translation: {
            "Створити подію": "Create an event",
            "Огляд подій": "Events overview",
            "Switch to English": "Перейти на українську",
            "Вийти з акаунту": "Log out",
            "Оберіть захід зі списку доданих": "Choose an event from added",
            "або": "or",
            "додайте новий захід": "add a new event",
            "Увійти до системи як організатор": "Log in as an organizer",
            "Введіть електронну пошту": "Enter an email",
            "Введіть пароль": "Enter a password",
            "Назва заходу": "Name of the event",
            "Час проведення": "Time of the event",
            "Місце проведення": "Place of the event",
            "Загалом відвідувачів на всіх локаціях": "Overall amount of visitors",
            "Перегляньте статистику за локаціями": "See statistics by locations",
            "додайте нову локацію":  "add a new location",
            "Захід ще не почався, тому статистику переглянути не можна. Будь ласка, відкрийте інший захід.": "This event has not started yet, so statistics are unavailable. Please try to see another event.",
            "Назва локації": "Name of the location",
            "Середній час, проведений на локації": "Average time spent on this location",
            " хвилин ": " minutes ",
            " секунд": " seconds",
            "Відсоток людей до 30 років": "Percent of people under 30 years",
            "Відсоток людей від 30 до 50 років": "Percent of people from 30 to 50 years",
            "Відсоток людей від 50 років": "Percent of people from 50 years",
            "Розподіл відвідувачів локації за віком": "Distribution of location's visitors by ages",
            "Розподіл відвідувачів локації за статтю": "Distribution of location's visitors by genders",
            "Відсоток жінок": "Percent of women",
            "Відсоток чоловіків": "Percent of men",
            "Розподіл відвідувачів локації у часі": "Distribution of location's visitors in time",
            "Подію додано!": "Event was added!",
            "Встановіть, будь ласка, коректний час у майбутньому!": "Please, set valid time in future",
            "Додавання нового заходу": "Event creation",
            "Дата початку заходу": "Start date of the event",
            "Час початку заходу": "Start time of the event",
            "Дата закінчення заходу": "End date of the event",
            "Час закінчення заходу": "End time of the event",
            "Країна проведення": "Country",
            "Місто проведення": "City",
            "Адреса проведення": "Address",
            "Місце проведення": "Place",
            "Опис": "Description",
            "Надіслати": "Submit",
            "Локацію додано!": "Location was added!",
            "Додавання нової локації на захід": "Location creation",
            "Тип локації": "Type of the location"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: Cookies.get('language'),

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;