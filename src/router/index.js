import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

// Applicable pages
import CommunityMainView from '../views/community/CommunityMainView.vue'
    import NewsView from '../views/community/NewsView.vue'
    import ArticlesPostView from '../views/community/ArticlesPostView.vue'
    import ForumView from '../views/community/ForumView.vue'
    import ArchiveView from '../views/community/ArchiveView.vue'
      import ArchiveRallyView from '../views/community/ArchiveRallyView.vue'
      import ArchiveGalleryView from '../views/community/ArchiveGalleryView.vue'

import CalendarMainView from '../views/calendar/CalendarMainView.vue'

import BreddeMain from '../views/bredde/BreddeMainView.vue'
import EquipmentView from '../views/bredde/EquipmentView.vue'

import EliteMainView from '../views/elite/EliteMainView.vue'
  import NationalTeamOverviewView from '../views/elite/NationalTeamsOverviewView.vue'
    import NationalTeamView from '../views/elite/NationalTeamView.vue'

import klubOversigtView from '@/views/klubOversigtView.vue'
import proevBueskydning from '@/views/bredde/proevBueskydning.vue'
import contact from '@/views/Contact.vue'
import about from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/klubOversigtView',
      name: 'klubOversigtView',
      component: klubOversigtView,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    
    //Fællesskab sider
    {
      path: '/communityMainView',
      name: 'Fællesskabet',
      component: CommunityMainView,
    },
    {
      path: '/newsView',
      name: 'Nyheder',
      component: NewsView,
    },
    {
      path: '/articlesPostView',
      name: 'Artikle',
      component: ArticlesPostView,
    },
    {
      path: '/ForumView',
      name: 'Forum',
      component: ForumView,
    },
    {
      path: '/ArchiveView',
      name: 'Archive',
      component: ArchiveView,
    },
    {
      path: '/ArchiveRallyView',
      name: 'ArchiveRallyView',
      component: ArchiveRallyView,
    },
    {
      path: '/ArchiveGalleryView',
      name: 'ArchiveGalleryView',
      component: ArchiveGalleryView,
    },

    // Kalender side
    {
      path: '/CalendarMainView',
      name: 'Kalender',
      component: CalendarMainView,
    },
    
    // Bredde sider
    {
      path: '/BreddeMainView',
      name:'/Bredde',
      component: BreddeMain,
    },
    {
      path: '/EquipmentView',
      name: 'Udstyr',
      component: EquipmentView,
    },
    {
      path: '/proevBueskydning',
      name: 'ProevBueskydning',
      component: proevBueskydning,
    },
    
    // Elite sider
    {
      path: '/EliteMainView',
      name: 'EliteMainView',
      component: EliteMainView,
      props:true,
    },
    {
      path: '/NationalTeamOverviewView/:id',
      name: 'NationalTeamOverviewView',
      component: NationalTeamOverviewView,
      props: true,
    },
    {
      path: '/Landsholdet/:category',
      name: 'NationalTeamView',
      component: NationalTeamView,
      props: true,
},

    // Admin
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
