# PersonalSpace [RU](README-RU.md)

The best and minimalistic way to describe yourself

![Project Preview](https://i.postimg.cc/dQWRNj0x/image.png)

## Table of Contents

- [Installation](#installation)
- [Config](#config)
- [Technologies Used](#technologies-used)
- [Contact](#contact)
- [Project Status](#project-status)

## Installation

To use this project, follow these steps:

1. **Clone the Repository:**
   Ensure that Git is installed on your system.
   ```bash
   git clone https://github.com/GogaNotClown/PersonalSpace.git
   cd PersonalSpace
   ```

2. **Download NPM packages:**
   Ensure that Node.js is installed on your system.
   ```bash
   npm install
   ```

3. **Run Project:**
   This command will start the building command. The full command is in package.json.
   ```bash
   npm run dev
   ```

## Config

The tailwind.config.js file is crucial for customizing your project's appearance and behavior using TailwindCSS and
DaisyUI. This file allows you to define custom styles, extend existing ones, and configure plugins.

### Customizing Themes

In the theme section, you can extend the default TailwindCSS theme to include custom fonts or colors that are not part
of the default configuration. For example, to add a custom font named 'Google Sans', you can do the following:

```js
theme: {
    extend: {
        fontFamily: {
            custom: ['Google Sans', 'sans-serif']
        }
    }
}
```

This code snippet adds 'Google Sans' as a custom font, which you can then use throughout your project by applying the
font-custom class. Custom fonts are located in the src/fonts directory.

### DaisyUI Themes

DaisyUI provides a set of pre-styled themes that you can use to quickly change the look and feel of your project. In the
daisyui section, you can specify which themes you want to use. For example:

```js
daisyui: {
    themes: [
        "winter",
        "luxury",
    ]
}
```

This configuration enables the 'winter' and 'luxury' themes. You can switch between themes by applying the corresponding
class to your HTML elements, such as theme-winter or theme-luxury. More themes [here](https://daisyui.com/docs/themes/).

### Adding Plugins

The plugins section is where you can add any TailwindCSS plugins that you want to use in your project. For
example, to use DaisyUI, you would include it like this:

```js
plugins: [
    require("daisyui")
]
```

This code snippet enables DaisyUI, allowing you to use its pre-styled components in your project.

### Content Configuration

The content property is used by TailwindCSS to purge unused styles in production builds. It should include paths to all
of your project's HTML and JavaScript files so that TailwindCSS can accurately determine which styles are being used.
For example:

```js
content: [
    "./src/**/*.{html,js}",
    "./node_modules/daisyui/**/*.js"
]
```

This configuration tells TailwindCSS to scan all .html and .js files in the src directory and any JavaScript files
within the node_modules/daisyui directory.

By customizing the tailwind.config.js file, you can tailor the look and feel of your project to your specific needs,
making it easier to create a unique and personalized user experience.

## Technologies Used

- HTML
- CSS
- JS (JavaScript)
- [TailwindCSS](https://tailwindcss.com/)
- [daisyUI](https://daisyui.com/)

## Contact

For questions or suggestions, you can contact [GogaNotClown](https://github.com/GogaNotClown/) via GitHub or through Telegram [somethhhhhing](https://t.me/somethhhhhing).

## Project Status

Completed
