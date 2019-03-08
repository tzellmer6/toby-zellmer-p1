## ITDEV-164 Project 1
### Iteration 1 

This project was created to showcase the many dependencies and libraries that we have learned in Web Programming 2. 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Documentation

This project required proper documentation of development in the form of a Project Description, a Feature List and a technical tasks list to complete these features, and lastly requirements for these features. These features are listed conveinently below. 

### Project Description:

Create a project that utilizes the following requirements: React, Styled Components, Rebass, Styled Icons and Theming. The application will either be completed as an update to my Web Programming 1 final project, a Python blog website, or as a basic “create react app” website, simply to showcase the requirements. The websites workflow should be managed in GitHub to show iterations of the project.

After attempting to update my Web Programming 1 final, and getting rebass and theming to work, I struck issues with Styled Components and a “React.createComponent” function that would not let me implement Styled Components. Looking into my npm-cache, I followed a rabbit hole of deleting certain components in node_modules, followed by compiling again, and getting more errors, and soon discovered I spent more time attempting to finish this issue that I did with implementing the first couple of components. To complete the Project, I decided on creating a fairly basic “create react app” to finish the project in a timely manner, and also because I eventually figured my old project would continue not working. 

I struggled with developing a scope for this application. With a time constraint, I wanted to complete something interesting, but also fairly concise. I was searching around to get ideas for a cool website theme, but stumbled across a concept of creating a website that has a static option key that lets you choose the theme to the page. I found some websites that had implemented this, but were far too complex to replicate and consolidate into a more basic website. I ended up choosing to use this idea, but wanted to theme the website with logos, so I chose Visa, Microsoft and Youtube (blue, gray and red). 

### Project Features:

The project will feature all requirements as stated above. These features will be basic features in the “create-react-app” shell, due to my issues with the previous project, and a time constraint. These features will be in their own “components” folder within the project file, which will be called into the main App.js page. 

The first feature required was React, which I met by choosing a create-react-app design. In hindsight, due to the nature of this project, I probably would have been better off using the Gatsby framework to create a Gatsby site. 

The second feature that was required was Rebass. I integrated Rebass components such as Box, Flex and Link, to divide up the “choose theme” and Styled Icons static icon section, and included information regarding the components I was showcasing, the purpose of the website, and included my LinkedIn as a link to my “creator” section.  The boxes capture what color the themes utilized, and implemented them to their respective section, highlighting the color of the logo that they represent. 

The next feature is Styled Icons. I initially wanted to import some icons from https://styled-icons.js.org/ into a styledicons.js file, which then exports them after adding styling, but found out that the icons get imported and utilize a color that I have implemented into Rebass components, which made the process much easier, simplifying into just importing them into the main file, and then utilizing them inside the Rebass boxes. 

The last required feature was Theming. I found a specific set of utilities that helped me accomplish my goals, called react-theme-provider that was offered by Callstack. I utilized this dependency in my ThemeChanger.js and Header.js files, and ThemeProvider in my main App.js class. This set of utilities allowed me to implement the option to choose and change the theme of the website, in real time, which I found that other resources didn’t offer, and made the user manually refresh the webpage. 

### Conclusion:

Overall, I enjoyed creating this project. I initially shouldn’t have tried to get my Web Programming 1 final to work and build off of that, since I spent a few days just trying to do that. If I wouldn’t have done that, I probably could have created a much more user intuitive site that is visually appealing. I am really happy that I got the “choose a theme” option to work, as I tried many different iterations of it, to no avail. I learned some great things in this project, such as some cool tricks with Rebass and Styled Icons. 
