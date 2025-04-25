import calculatorImg from '../assets/img/react-lake.jpg';
import weatherImg from '../assets/img/chrome-river.jpg';
import notificationImg from '../assets/img/breadcrumb-trail.jpg';
import todoImg from '../assets/img/redux-woods.jpg';

export const WIDGETS = [
    {
        id: 0,
        name: 'Calculator',
        image: calculatorImg,
        featured: false,
        description:
            'A calculator widget to place or prompt via keypress at your service.'
    },
    {
        id: 1,
        name: 'Weather',
        image: weatherImg,
        featured: false,
        description:
            'A visually pleasing weather widget that will give alerts on command in weather conditions or stasis status.'
    },
    {
        id: 2,
        name: 'Message Notifications ',
        image: notificationImg,
        featured: false,
        description:
            'A notification widget that shows new or current logs of recieved messages.'
    },
    {
        id: 3,
        name: 'To-do Reminder',
        image: todoImg,
        featured: true,
        description:
            "A widget log that displays the time, date and event of the users needs."
    },
    {
        id: 4,
        name: 'Alcohol-intake Reminder',
        image: drunkImg,
        featured: false,
        description:
            "A really bad reason."
    }
];
