<template>
    <nav>
        <v-app-bar dark flat app color="#0f111c" class="px-8">
            <template>
                <v-tabs v-model = "item" centered slider-size="4">
                    <v-tab v-for="item in items" :key="item" @click="$vuetify.goTo('#'+item, options)" :href = "'#'+item">
                        {{ item }}
                    </v-tab>
                    <v-tabs-items>
                        <v-tab-item v-for="item in items" :key="item" value = '#' + item>
                        </v-tab-item>
                    </v-tabs-items>
                    <v-tabs-slider></v-tabs-slider>
                </v-tabs>
            </template>
        </v-app-bar>
    </nav>
</template>


<script>


export default{    
    data() {
        return {
            item:null,
        }
    },
    props:{
        entries:{
            require: true,
            default: "home"
        },
        items:{}
    },
    computed:{
        options (){
            return {
                duration : 30,
                offset : 3,
                easing: 'linear'
            }
        },
    },
    watch: {
        entries: function () { // watch it
        if (this.$props.entries == "home") {
            this.item = "home"
        }
        else if (this.$props.entries == "about") {
            this.item = "about"
        }
        else if (this.$props.entries == "project"){
            this.item = "project"
        }
        else if (this.$props.entries == "award") {
            this.item = "award"
        }
        else if (this.$props.entries == "contact") {
            this.item = "contact"
        }
    }
    },
    methods: {
        // eslint-disable-next-line no-unused-vars
    
        
    }
    
}

</script>

<style scoped>
.v-tab{
    color: #fff !important;
}
.v-tab:active {
    color: black !important;
    background-color:#62E570 !important;
}
.v-tabs-slider {
    color: #62E570 !important;
}
</style>
