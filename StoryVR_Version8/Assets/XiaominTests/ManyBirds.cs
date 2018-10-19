using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ManyBirds : MonoBehaviour {
	
	public GameObject obj;
	// Use this for initialization
	void Start () {
		for (int i = 0; i < 30; i++) {
			GameObject newSeagull = (GameObject)Object.Instantiate (obj, new Vector3 (i+210, 13, 367), Quaternion.identity);
			Renderer objectRenderer = newSeagull.GetComponentInChildren<Renderer> ();
			objectRenderer.material.color = Color.white * Random.value;
		}
	}
	
	// Update is called once per frame
	void Update () {
		
	}

}