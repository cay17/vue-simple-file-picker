# Vue-simple-file-picker

Vue-simple-file-picker is a vuejs component that allows you to retrieve images (url and base64) from the user.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install Vue-simple-file-picker.

```bash
npm install --save vue-simple-file-picker
```

## Usage
#### Import the component
```javascript
import Vue from "vue";

import vue-simple-file-picker from 'vue-simple-file-picker'

Vue.use(vue-simple-file-picker);
```

#### And use it
```html
<template>
  <vue-simple-file-picker 
    :height="150"
    :width="150"
    :bgColor="#fff"
    @data="getFileData"
  />
</template>
<script>
export default {
    methods: {
        getFileData(data){
            console.log(data.url) //the file url
            console.log(data.file) //the file in base64
        }
    }
};
</script>
```
## Props
### height : integer
The height of component in px.
### width : integer
The width of component in px.
### bgColor :  string
The background color of component.
### heightFull : boolean 
true if the component takes the full height of the parent.
### widthFull : boolean 
true if the component takes the full width of the parent.
### data : function
function to receive file data

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[ISC](https://choosealicense.com/licenses/isc/)