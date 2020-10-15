<template>
    <div>
        Samko:
        {{ name }}
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    components: {},
    setup() {
        return {
            name: 'samko'
        }
    }
});
</script>