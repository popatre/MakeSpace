# Make Space

Make Space makes finding and booking available spaces easy. It provides a centralised place to view available spaces in your area, view their availability, contact their owner and easily leave reviews.

See video presentation here: https://www.youtube.com/watch?v=OB-GBHw3ivY

A hosted version of the app can be found here : https://expo.dev/@popatre/MakeSpace

The Make Space backend github can be found: https://github.com/Kpovey115/makespace-BE

**The Expo Go app is required in order to open on your mobile device**

# Running the app locally

### Prerequisites

-   Node v.14 and above
-   Expo CLI [download instructions](https://docs.expo.dev/get-started/installation/)
-   Xcode or Android studio simulator (If wanting to run on a desktop mobile simulator)
-   Visual Studio Code Editor (or any other code editor of choice)
-   Firebase initialised app [instructions](https://firebase.google.com/docs/web/setup)

## Setup

1.  In your terminal, navigate to your usual directory for projects, then run the following code:

        $ git clone https://github.com/Kpovey115/makespace-FE.git

2.  Change into the downloaded directory and open this in your code editor. The below code will enable you to do this with Visual Studio Code.

        $ cd makespace-FE
        $ code .

3.  Once open in your editor, in the terminal, run the following to install the dependencies for the project.

        $ npm install

4.  The current project uses Firebase authentication via a firebase initialised app. You will need to create your own Firebase initilised web app, and then copy the provided setup code. This will need to replace the firebaseConfig code in the firebase.js document.

        import { initializeApp } from 'firebase/app';

        TODO: Replace the following with your app's Firebase project configuration
        const firebaseConfig = {
        ...
        };

        const app = initializeApp(firebaseConfig);

5.  To start the project, ensure that the Expo CLI has been installed. Run the following code to open the expo managed project.

        $ expo start

If errors occur during login/signup, please ensure you have copied your firebase settings correctly

6. Expo should open a page in your browser. The app can be run using a web browser option on the left, or if you have installed Xcode or Android studio, can be run in the mobile simulator.

## How to Use

-   New users will need to sign up, using the sign up page.
-   All spaces can be viewed via the browser button. The filter modal can then narrow down your search. Options to filter include price, size and amenities.
-   Click a listing to reveal a more detailed page about it. On here, the owner can be contacted, bookings can be made (depending on availability), and reviews can be posted/viewed.
-   A new space can be posted via the 'Make a space' button the home screen. Complete the form and upload an image in order to view your new listing on the main listing page.
-   Using the top left hamburger icon, you can view your account page, and have the option to change your profile image, usernames and password. Your listings can also be viewed from this page.
-   To sign out, click the 'sign out' button.

# Built with

-   React Native
-   Expo
-   Firebase
-   React Native Paper
-   Formik
-   Yup
-   Expo maps
-   MongoDb& Mongoose
-   Express
-   Axios
-   Testing: Mocha & Chai

# Developed by

Team Floating Lemons: as part of the Northcoders bootcamp

-   Kyle Povey [linkedin](https://www.linkedin.com/in/kyle-povey/) - [github](https://github.com/Kpovey115)
-   Cat Miller [linkedin](https://www.linkedin.com/in/cat-miller/) - [github](https://github.com/catcodingcat)
-   Jonathan McGuire [linkedin](https://www.linkedin.com/in/jonathan-j-mcguire/) - [github](https://github.com/popatre)
-   Scarlett Adams [linkedin](https://www.linkedin.com/in/scarlett-adams/) - [github](https://github.com/scar1377)
