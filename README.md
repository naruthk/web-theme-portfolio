# Simple Modern One-Page Portfolio HTML Theme

The ultimate one-page portfolio template featuring an attractive portfolio layout and skills section created by [Naruth Kongurai](https://github.com/naruthk). 

## Download

To download the distributed version (just the HTML, CSS, and Javascript files to get everything up and running right away), click on this link: [http://www.naruthk.com/media/portfolio-theme.zip](http://www.naruthk.com/media/portfolio-theme.zip)

## Demo

- [http://www.naruthk.com](http://www.naruthk.com) - I created this theme for the purpose of using it as the design for my own website. I decided to share it everyone else.
- [https://codepen.io/naruthk/pen/wrRjKv](https://codepen.io/naruth1212/pen/wrRjKv) - via CodePen!

![Demo](screenshots/overall.png)

## Development

If you're interested in making changes in development mode to better suit certain aspects of design that you want, then please kindy follow the instructions below carefully.

### Requirements

- [Node.js](http://nodejs.org/)
- Build sytem: [Gulp](http://gulpjs.com/)

### Build

- Do the `git clone` command of this repository
- Move into the directory of this recently cloned repository
- Type and run this command `npm install`
- Run `gulp copy` to output a **dist** folder that contains all the necessary files to properly display the website on the browser
- To enter production mode please run `gulp watch`

----

## Folder and Files

```
./
├── package.json
├── gulpfile.js                                * gulp tasks & config
├── README.md
|
├── screenshots/                               * test screenshots
|
├── index.pug                                  * pug file for homepage
|
├── scss/                                      * scss files
│   ├── _base.scss                             * typography, fonts, general styling
│   ├── _layout.scss                           * layout settings
│   ├── _modals.scss
│   ├── _theme.scss                            * theme of the webpage (most important)
│   ├── _variables.scss                        * variables
│   ├── main.scss                              * compiles all above scss files into a single file
│
└── dist/                                     * built source
	├── index.html
	├── main.css
    ├── theme.js
```

`Bootstrap`, `jQuery`, and `Font Awesome` libraries are also used but are provided from external CDNs only.

----

## Help & Support

Direct any information to `contact@naruthk.com`, especially for help and support. Please support my creation by sharing this theme with everyone else. Thank you!

## License

[MIT](https://github.com/naruthk/web-theme-portfolio/blob/master/LICENSE)

Use of this material is, at all times, "at your own risk." If you are dissatisfied with any aspect of the material, any of these terms and conditions or any other policies, your only remedy is to discontinue the use of the material. In no event shall I, the author be liable to any user or third party, for any damages whatsoever resulting from the use or inability to use this material upon this site, whether based on warranty, contract, tort, or any other legal theory, and whether or not the website is advised of the possibility of such damages.