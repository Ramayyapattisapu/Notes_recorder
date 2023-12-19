# Notes Recorder
1) Clone the repo using the given [github link.]
(https://github.com/Ramayyapattisapu/Notes_recorder)

	```git clone git@github.com:Ramayyapattisapu/Notes_recorder.git ```

2) Setup MongoDb project -
	- Create a project with your desired name [link to create new project.](https://cloud.mongodb.com/v2#/org/6490b261c8d493529c56ee3b/projects/create)
	 - Project owner will be as same as ur email ID
	 - If running locally its preferred to -- add your current ip address -- hit the button on the Database Deployment page and you are good to go.
	 - Now we are going to build a database which is free and hit the -- Create -- button.
	 - Select the desired Cloud Provider & Region as you wish scroll down and hit the -- Create Cluster -- button.
	 - Create a username and password as you wish or hit the --Autogenerate Secure Password-- and copy the username and password in the .env file.
	 - Hit the -- create user -- button, now you can see a popup on the left bottom saying (Your cluster has finished provisioning).
	 - Scroll down and hit the -- Finish and close -- button.
	 -  On the popup hit the -- Go to databases -- this lands you on the database page for this project.
	 - Get the database URL and replace it in .env file ```MONGODB_URI=<your url>``` 

4) Setup Oauth -
	- Open a new browser and go to  [google console for oauth.](https://console.cloud.google.com)
	 -  In the console go to projects drop down next to google cloud
   symbol in the top left. 	
	  -  create a new project with your desired name (name has to be specific to that project  only.
	   - Your project is created.
   - Go to  APIs and services and on the left side go to CREDENTIALS to get your 
		   - client ID
		   - client secret
	- Replace client_id and client_secret it in .env file.
	- Create GOOGLE_CALLBACK_URL from the google console with the following url - ```http://localhost:8000/google/callback```
5) Install dependencies and start the server -
	```
	npm install;
	npm start;
	```