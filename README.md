# Browser-Extension

### I've finished building an OpenSauced browser extension that connects to the OpenSauced API and performs the following tasks:-
- It fetches the `username` from the GitHub profile and checks whether the user has an `account` on the OpenSauced website or not.
- If the user is validated then it renders the button on the profile named `View on OpenSauced` which has the click functionalities that take you to the `OpenSauced profile` page.
- If the user is not validated then it renders the button on the profile named `Join OpenSauced` which has also the click functionalities that take you to the `OpenSauced authentication` page.
- It also authenticates the user using an `auth token` and displays a text as `You are an authorized user of OpenSauced. Logged in as {username}` after verifying the user.

# Screenshots
### When the user has an OpenSauced account-

![brian](https://user-images.githubusercontent.com/97666287/227716277-9575eafb-df66-4c2b-a03f-fcf4cb491f67.png)

### When the user has not an OpenSauced account-

![brandon](https://user-images.githubusercontent.com/97666287/227716342-504bb936-dcba-47cc-9957-ab7e25830306.png)

### When the user auth token is validated, the extension popup looks like this-

![token](https://user-images.githubusercontent.com/97666287/227860197-33ca027c-261e-4f24-8d66-444608c94fec.png)

# Video

https://user-images.githubusercontent.com/97666287/227717061-4696d078-476e-4e84-8cc9-3e2e718bdc41.mp4

## Run Locally

Clone the project

```bash
  git clone https://github.com/Your Username/Browser-Extension.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Install the Extension

When the build completes, open Chrome or Edge and navigate to `chrome://extensions`. Make sure to turn on the developer mode switch.
<br>

![image](https://user-images.githubusercontent.com/97666287/230595603-70d88ed5-c895-4acf-b710-b8e693471eeb.png)

Drag your `dist` folder into the Extensions Dashboard to install it. Your extension icon will be in the top bar. The icon will be the first letter of the extension's name.

![crxjs](https://crxjs.dev/vite-plugin/assets/images/start-context-menu-inspect-54cdc6d1667042c9738da816dc921cc3.png)

And boom! Extension has been installed.

## Resources

- [api.opensauced.pizza](https://api.opensauced.pizza/)
- [docs.opensauced.pizza](https://docs.opensauced.pizza/)
- https://github.com/open-sauced/assets
- [crxjs](https://crxjs.dev/) 
- [vite](https://vitejs.dev/)
