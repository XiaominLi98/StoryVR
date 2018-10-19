var _minSpeed: float = 50; // Bats minimum random speed
var _maxSpeed: float = 65; // Bats maximum random speed
var _minScale: float = .7; // Bats minimum random size
var _maxScale: float = 1; // Bats maximum random size
var _spawnSphere: int = 350; // Range bats have to move around
var _dive: boolean = true; // Dive on/off
var _diveValue: float = 100; // Dive depth
var _diveFrequency: float = 0.9; // How often bats dive 0 = always 1 = never
var _damping: float = 2; // Rotation tween damping, lower number = smooth/slow rotation

private var lookAt: Transform;
private var wayPoint: Vector3;
private var _Yposition: float;
private var Speed = 10;
private var _dived: boolean;

function Start() {
    Wander();
    _Yposition = transform.position.y;
    var sc = Random.Range(_minScale, _maxScale);
    transform.localScale = Vector3(sc, sc, sc);
    transform.position = Random.insideUnitSphere * _spawnSphere + transform.parent.transform.position;
    transform.position.y = Random.Range(-25, 25) + _Yposition + transform.parent.transform.position.y;
}



function Update() {
    transform.position += transform.TransformDirection(Vector3.forward) * Speed * Time.deltaTime;
    if ((transform.position - wayPoint).magnitude < 25) {
        Wander();
    }
    var rotation = Quaternion.LookRotation(wayPoint - transform.position);
    transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * _damping);
}

function Wander() {
    Speed = Random.Range(_minSpeed, _maxSpeed);
    if (_dive && !_dived && Random.value > _diveFrequency) {
        for (var state: AnimationState in transform.Find("batModel").GetComponent.<Animation>()) {
            state.speed = 0.1;
            wayPoint.x = transform.position.x + Random.Range(-50, 50);
            wayPoint.z = transform.position.z + Random.Range(-50, 50);
            wayPoint.y = Random.Range(-25, 25) + _Yposition;
            wayPoint.y -= _diveValue;
            _dived = true;
        }
        Speed = _maxSpeed*1.25;
    } else {
        for (var state: AnimationState in transform.Find("batModel").GetComponent.<Animation>()) {

            if (_dived) {
                state.speed = Speed * .09;
            } else {
                state.speed = Speed * .06;
            }
        }
        wayPoint = Random.insideUnitSphere * _spawnSphere + transform.parent.transform.position;
        wayPoint.y = Random.Range(-25, 25) + _Yposition + transform.parent.transform.position.y;
        _dived = false;
    }
}