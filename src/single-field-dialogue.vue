<template>
    
    <v-slide-y-transition>
        <v-layout>
            <v-flex>
                <p @click="toggle" class="purple--text">{{displayValue}}</p>
                <v-dialog v-model="show" max-width="500px">
                    <v-card>
                    <v-card-title>
                        <span class="title">{{title}}</span>
                    </v-card-title>
                    <v-card-text>
                        <v-text-field v-model="data" @input="update" :multi-line="multiLine"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" flat @click.stop="toggle">Close</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-flex>
        </v-layout>
    </v-slide-y-transition>

</template>

<script>

export default {

    name: 'editable',

    mounted(){
        this.data = this.value;
    },
    
    props: {
        multiLine: Boolean,
        value: String,
        title: String
    },

    data(){return {
        show: false,
        data: ''
    }},

    computed:{

        displayValue(){return this.data==''?'None Entered':this.data},
 
    },

    methods: {

        toggle(){
            this.show = !this.show;
        },

        update(){
            this.$emit('input', this.data);
        }

    }

}

</script>
