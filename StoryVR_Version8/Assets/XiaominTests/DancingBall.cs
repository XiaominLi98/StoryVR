using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DancingBall : MonoBehaviour {

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		transform.position = new Vector3 (6, 5 + Mathf.Sin (Time.time * 5.0f), 10);
	}
}
