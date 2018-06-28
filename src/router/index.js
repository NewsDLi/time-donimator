import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import TimeEntryPage from '@/components/pages/TimeEntryPage'
import EntryChartPage from '@/components/pages/EntryChartPage'
import LoginPage from '@/components/pages/LoginPage'
import TaskMangementList from '@/components/pages/TaskMangementList'
import TaskMangementDetail from '@/components/pages/TaskMangementDetail'
import CodeReviewDetail from '@/components/pages/codeReview/CodeReviewDetail'
import CodeReviewForm from '@/components/pages/codeReview/CodeReviewForm'
import CodeReviewList from '@/components/pages/codeReview/CodeReviewList'
import App from '@/APP'

Vue.use(VueResource)
Vue.use(Router)

Vue.http.options.emulateJSON = true

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },

    {
      path: '/',
      name: 'App',
      component: App,
      children: [
        {
          path: 'time-entry',
          name: 'TimeEntryPage',
          meta: {
            requireAuth: true,
            keepAlive: false
          },
          component: TimeEntryPage
        },
        {
          path: 'time-chart',
          name: 'EntryChartPage',
          meta: {
            requireAuth: true,
            keepAlive: false
          },
          component: EntryChartPage
        },
        {
          path: 'task-mangement-list',
          name: 'TaskMangementList',
          meta: {
            requireAuth: true,
            keepAlive: true
          },
          component: TaskMangementList
        },
        {
          path: 'task-mangement-detail',
          name: 'TaskMangementDetail',
          meta: {
            requireAuth: true,
            keepAlive: false
          },
          component: TaskMangementDetail
        },
        {
          path: 'code-review-detail/:id',
          name: 'CodeReviewDetail',
          meta: {
            requireAuth: true,
            keepAlive: false
          },
          component: CodeReviewDetail
        },
        {
          path: 'code-review-form',
          name: 'CodeReviewForm',
          meta: {
            requireAuth: true,
            keepAlive: false
          },
          component: CodeReviewForm
        },
        {
          path: 'code-review-list',
          name: 'CodeReviewList',
          meta: {
            requireAuth: true,
            keepAlive: true
          },
          component: CodeReviewList
        }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
