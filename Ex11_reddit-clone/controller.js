app.controller("postsController", function($scope) {
    $scope.list = [
        {
            'title': "La Sal Mountains - Durango",
            'author': "James Smith",
            'imageUrl': "https://durangogallery.photography/wp-content/uploads/2016/01/La-Sal-Mountains-300x200.jpg",
            'description': "Relating to high mountains, especially the mountains of the European Alps. Rolling land has gentle slopes continuing for a long distance. The tree stood ghost-like, the silent observer of the snowy mountains, the river and the clouds. The only thing bigger than range of granite peaks was the midnight sky, dotted with silver and as vast as any eye could wander. Below stood a girl, made all the more tiny, her red dress flimsy in the wind.",
            'votes': 5
        },
        {
            'title': "Montserrat Mountains - Barcelona",
            'author': "Kelly Connors",
            'imageUrl': "https://www.worldfortravel.com/wp-content/uploads/2014/03/Barcelona-Montserrat-Mountains-300x200.jpg",
            'description': "The tree stood ghost-like, the silent observer of the snowy mountains, the river and the clouds. The only thing bigger than range of granite peaks was the midnight sky, dotted with silver and as vast as any eye could wander. Below stood a girl, made all the more tiny, her red dress flimsy in the wind. Relating to high mountains, especially the mountains of the European Alps.",
            'votes': 4
        },
        {
            'title': "Himalayas - Nepal",
            'author': "Miguel Strogoff",
            'imageUrl': "https://chimalaya.org/wp-content/uploads/2012/11/American-mountains-300x200.jpg",
            'description': "The mountains were covered with a rug of trees, green, yellow, scarlet and orange, but their bare tops were scarfed and beribboned with snow. From carved rocky outcrops, waterfalls drifted like skeins of white lawn, and in the fields we could see the amber glint of rivers and the occasional mirror-like flash of a mountain lake.",
            'votes': 10
        },
        {
            'title': "Yosemite - Wyoming",
            'author': "Ernesto Gueb",
            'imageUrl': "https://www.wallpaperslive.org/wp-content/uploads/2016/06/Yosemite-Mountains-300x200.jpg",
            'description': "The mountains lay in a great line like the spine of the land. It was as if long ago they were a great beast, only to lie down one day and never get up. Perhaps the beast fell into an enchanted sleep, perhaps its soul was still in there. The range was high to the west and low to the east, curling at the end like a tail. They are the reason our land this side is so lush and the other side is scorching desert. To cross them the clouds must go high and meet the colder air up there, then they dump their rain on us, every drop.",
            'votes': -4
        }
    ];

    $scope.newPost = {};
    $scope.list.enterPost = false;
    $scope.list.search = "";

    $scope.addPost = function() {
        $scope.list.push( {
            'title': $scope.newPost.title,
            'author': $scope.newPost.author,
            'imageUrl': $scope.newPost.imageUrl,
            'description': $scope.newPost.description,
            'votes': $scope.newPost.votes
        });
        console.log($scope.list)
        $scope.newPost = {};
    }
    $scope.showSubmitPost = function () {
        if(!$scope.list.enterPost) {
            $scope.list.enterPost = true;
        } else {
            $scope.list.enterPost = false
        }
    }

})
