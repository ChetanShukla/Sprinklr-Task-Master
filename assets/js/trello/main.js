Vue = require('vue');
VueRouter = require('vue-router');
Vue.use(VueRouter);

require('./../../data/seed.js');
require('./store.js');
require('./../directives/vue-focus.js');
require('./../directives/vue-dnd.js');
require('./../components/collection.js');
require('./../components/project.js');

var router = new VueRouter()

router.map
({
    '/': 
    {
        component: Vue.component('project-collection'),
    },
    '/project/:projectId': 
    {
        component: Vue.component('project'),
    }
})

var app = Vue.extend
({
	data: function() 
	{
		return 
		{
			'searchText': '',
			'projects': trelloStorage.fetchprojectCollection(),
			'newproject': '',
		}
	},
})

router.start(app, '#trello-app')
