import BueskydningLogo from '@/assets/BueskydningLogo.svg'

export default [
    // {label:'', to: '/', isLogo: true},
    
    {
        label: 'Fællesskab',
        to: '/communityMainView',
        children: [
            {label: 'Nyheder', to: '/newsView'},
            {label: 'Forum', to: '/ForumView'},
            {label: 'Arkiv', to: '/ArchiveView'},
        ]
    },
    { label: 'Kalender', to: '/CalendarMainView'},

    {
        label: 'Stævner',
        to: null,
        children: [
            {label: 'Stævne afholdelse', to: null},
            {label: 'Afstand & aldersklasser', to: null},
            {label: 'Danske Mestre', to: null},
            {label: 'Combat archery', to: null},
            {label: 'Andre stævner', to: null},
        ]
    },

    {
        label: 'Bredde',
        to: '/BreddeMainView',
        children: [
            {label: 'Certificeret ungdomsklub', to: null},
            {label: 'Bueskydning for skoler', to: null},
            {label: 'DIF', to: null},
            {label: 'Soldaterprojekt', to: null},
            {label: 'Medlemssystem', to: null},
            {label: 'Udstyr', to: '/EquipmentView'},
            {label: 'Webshop', to: null},
        ]
    },


    {
        label: 'Elite',
        to: '/EliteMainView',
        children: [
            {label: 'Landsholdet', to: '/NationalTeamOverviewView/1'},
            {label: 'Skytterepræsentant', to: null},
            {label: 'Talent center', to: null},
            {label: 'Talent udvikling', to: null},
            {label: 'Skole og uddannelse', to: null},
            {label: 'Antidoping', to: null},

        ]
    },

    {
        label: 'Træning',
        to: null,
        children: [
            {label: 'Teknisk træning', to: null},
            {label: 'Mental træning', to: null},
        ]
    },

    {
        label: 'Information',
        to: null,
        children: [
            {label: 'Kontakt Information', to: '/contact'},
            {label: 'Kluboversigt', to: null},
            {label: 'Udvalg', to: null},
            {label: 'Kursus', to: null},
            {label: 'Forbund', to: null},
            {label: 'Administration', to: '/contact'},
            {label: 'Sponsorer', to: null},
        ]
    }
    
]