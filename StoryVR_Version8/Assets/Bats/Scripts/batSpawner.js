var batPrefab:Transform;		// Insert bat prefab
var batAmount:int = 50;			// Number of bats to be spawned instantly

function Start () {
for(var i:int=0;i<batAmount;i++)
{
    var obj : Transform = Instantiate(batPrefab);
    obj.parent = transform;
}
}