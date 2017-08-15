Vue.component('project-collection', 
{
    template: '#trello-project-collection',
    data: function() 
    {
    	return 
        {
    		'projects': trelloStorage.fetchprojectCollection(),
    		'newproject': false,
    		'newprojectTitle': '',
    	}
    },
    methods: 
    {
    	createNewproject: function() 
        {
    		var newprojectTitle = this.newprojectTitle;
    		if (newprojectTitle.length > 0) 
            {
				var projectCount = trelloStorage.fetchprojectCount();
	    		projectCount += 1;
	    		trelloStorage.saveprojectCount(projectCount);
	    		var projectKey = 'b' + projectCount;
	    		this.$set('projects.' + projectKey, 
                {
	    			'name': newprojectTitle,
	    			'lists': [],
	    		});
	    		this.newprojectTitle = '';
	    		router.go('/project/' + projectKey);
    		}
    	},
    	activateNewproject: function() 
        {
    		if (!this.newproject) 
            {
    			this.newproject = !this.newproject;
    		}
    	},
    },
    watch: 
    {
    	projects: 
        {
    		handler: function(projects) 
            {
    			trelloStorage.saveprojectCollection(projects);
    		},
    		deep: true,
    	}
    },
});
