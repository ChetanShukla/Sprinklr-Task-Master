(function (exports) 
{
	var project_STORAGE_KEY = 'trello-projects';
	localStorage.setItem(project_STORAGE_KEY, JSON.stringify(trelloSeedData['projects']));
	var project_COUNT_KEY = 'trello-project-count';
	var projectCount = 0;
	for (project in trelloSeedData['projects']) 
	{
		projectCount += 1;
	}
	localStorage.setItem(project_COUNT_KEY, JSON.stringify(projectCount));

	exports.trelloStorage = 
	{
		fetchprojectCollection: function () 
		{
			return JSON.parse(localStorage.getItem(project_STORAGE_KEY) || '[]');
		},
		saveprojectCollection: function (projects) 
		{
			localStorage.setItem(project_STORAGE_KEY, JSON.stringify(projects));
		},
		fetchproject: function (projectId) 
		{
			return this.fetchprojectCollection()[projectId];
		},
		saveproject: function(projectId, lists) 
		{
			var updatedCollection = this.fetchprojectCollection();
			updatedCollection[projectId]['lists'] = lists;
			this.saveprojectCollection(updatedCollection);
		},
		fetchprojectCount: function() 
		{
			return JSON.parse(localStorage.getItem(project_COUNT_KEY) || '[]');
		},
		saveprojectCount: function(projectCount) 
		{
			localStorage.setItem(project_COUNT_KEY, JSON.stringify(projectCount));
		}
	};
})(window);
