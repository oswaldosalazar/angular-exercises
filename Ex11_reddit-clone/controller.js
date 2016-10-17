app.controller("postsController", function($scope) {
    $scope.list = [
        {
            'title': "La Sal Mountains - Durango",
            'author': "Will Ferrel",
            'imageUrl': "http://durangogallery.photography/wp-content/uploads/2016/01/La-Sal-Mountains-300x200.jpg",
            'description': "Relating to high mountains, especially the mountains of the European Alps. Rolling land has gentle slopes continuing for a long distance. The tree stood ghost-like, the silent observer of the snowy mountains, the river and the clouds. The only thing bigger than range of granite peaks was the midnight sky, dotted with silver and as vast as any eye could wander. Below stood a girl, made all the more tiny, her red dress flimsy in the wind.",
            'votes': 5,
            'date': 1476495805093,
            'comments':[
                {
                    'commentAuthor': "Bruce Wayne",
                    'commentText': "Great post!"
                }
            ]
        },
        {
            'title': "Montserrat Mountains - Barcelona",
            'author': "Sarah Palin",
            'imageUrl': "http://www.worldfortravel.com/wp-content/uploads/2014/03/Barcelona-Montserrat-Mountains-300x200.jpg",
            'description': "The tree stood ghost-like, the silent observer of the snowy mountains, the river and the clouds. The only thing bigger than range of granite peaks was the midnight sky, dotted with silver and as vast as any eye could wander. Below stood a girl, made all the more tiny, her red dress flimsy in the wind. Relating to high mountains, especially the mountains of the European Alps.",
            'votes': 4,
            'date': 1476295705093,
            'comments':[
                {
                    'commentAuthor': "Harrison Ford",
                    'commentText': "I went there too!"
                },
                {
                    'commentAuthor': "George Bush",
                    'commentText': "Fantastic!"
                }
            ]
        },
        {
            'title': "Yosemite - Wyoming",
            'author': "Ernesto Guevara",
            'imageUrl': "http://www.wallpaperslive.org/wp-content/uploads/2016/06/Yosemite-Mountains-300x200.jpg",
            'description': "The mountains lay in a great line like the spine of the land. It was as if long ago they were a great beast, only to lie down one day and never get up. Perhaps the beast fell into an enchanted sleep, perhaps its soul was still in there. The range was high to the west and low to the east, curling at the end like a tail. They are the reason our land this side is so lush and the other side is scorching desert. To cross them the clouds must go high and meet the colder air up there, then they dump their rain on us, every drop.",
            'votes': -4,
            'date': 1476395765093,
            'comments':[]
        }
    ];

    $scope.newPost = {};
    $scope.newComment = {};
    $scope.list.showPostForm = false;
    $scope.list.showComments = false;
    $scope.list.showCommentForm = false;
    $scope.list.search = "";
    $scope.sort = ["votes", "date", "title"];
    $scope.sortType = "votes";

    $scope.assignType = function(type) {
        $scope.sortType = type;
    }

    $scope.addPost = function() {
        $scope.newPost.date = Date.now();
        $scope.list.push( {
            'title': $scope.newPost.title,
            'author': $scope.newPost.author,
            'imageUrl': $scope.newPost.imageUrl,
            'description': $scope.newPost.description,
            'votes': 0,
            'date': $scope.newPost.date,
            'comments': []
        });
        $scope.newPost = {};
        $scope.list.showPostForm = false;
    }
    $scope.showSubmitPost = function () {
        if(!$scope.list.showPostForm) {
            $scope.list.showPostForm = true;
        } else {
            $scope.list.showPostForm = false;
        }
    }
    $scope.hideSubmitPost = function () {
        $scope.list.showPostForm = false;
    }

    //
    //     <a><img src="img/delete.png" ng-click="removeItem(item)">{{$index}}</a>
    // and modify the removeItem function to find an index using the indexOf method of an array as follows:
    //
    // $scope.removeItem = function(item){
    //    $scope.items.splice($scope.items.indexOf(item),1);
    // }

    $scope.showComments = function (item) {
        if ($scope.list[$scope.list.indexOf(item)].showComments) {
            $scope.list[$scope.list.indexOf(item)].showComments = false;
        } else {
            $scope.list[$scope.list.indexOf(item)].showComments = true;
        }
    }
    $scope.showCommentForm = function (item) {
        if ($scope.list[$scope.list.indexOf(item)].showCommentForm) {
            $scope.list[$scope.list.indexOf(item)].showCommentForm = false;
        } else {
            $scope.list[$scope.list.indexOf(item)].showCommentForm = true;
        }
    }
    $scope.addComment = function(item) {
        $scope.list[$scope.list.indexOf(item)].comments.push( {
            'commentAuthor': $scope.newComment.commentAuthor,
            'commentText': $scope.newComment.commentText
        });
        $scope.list[$scope.list.indexOf(item)].showComments = true;
        $scope.list[$scope.list.indexOf(item)].showCommentForm = false;
        $scope.newComment = {};
    }
    $scope.increaseVotes = function(item) {
        $scope.list[$scope.list.indexOf(item)].votes += 1;
    }
    $scope.decreaseVotes = function(item) {
        $scope.list[$scope.list.indexOf(item)].votes -= 1;
    }
})
