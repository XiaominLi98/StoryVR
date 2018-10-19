using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class ChangeScene : MonoBehaviour {
	public void GoToScene(){
		Debug.Log ("Go to scene method is called...");
		SceneManager.LoadScene ("StoryMainScene");
	}
		
}
