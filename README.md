

# vuetify-single-field-dialogue
> A simple little dialogue editor for text fields with vuetify

### Install

```bash

$ npm install vuetify-single-field-dialogue --save

```

Then in your `main.js` file, this also works with [single file components](https://vuejs.org/v2/guide/single-file-components.html) via the `components` property.

```javascript
import Vue from 'vue'
import Vuetify from 'vuetify'
import SingleFieldDialogue from 'single-field-dialogue';

Vue.use(Vuetify)

Vue.component('single-field-dialogue', SingleFieldDialogue);

```

### Props

Name           | Type   | Default                                            | Description
-------------- | ------ | -------------------------------------------------- | ----------------------------------------------------------------------
multiLine | `Boolean` | `false` | Sets if the input will be single or multi-line 
value | `String` | Quick Dialogue Button | Starting Value
title | `String` | primary | Sets title of dialogue box