using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LampFall : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		if (transform.position.y > 0.6f) {
			transform.Translate (0, -10.0f * Time.deltaTime, 0, Space.World);
		}

	}
}
