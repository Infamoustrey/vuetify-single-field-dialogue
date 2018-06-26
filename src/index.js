import Vue from 'vue';
import singleFileDialogue from './single-field-dialogue.vue'

export default {
    install(Vue, options){
        Vue.component('single-field-dialogue', singleFileDialogue);
    }
}