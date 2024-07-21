<template>
    <div class="pagination-buttons px-5">
        <button @click="goToPreviousPage" :disabled="currentPage === 1" class="btn btn-primary">Précédent</button>
        <button @click="goToNextPage" :disabled="currentPage === totalPages" class="btn btn-primary">Suivant</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    currentPage: {
        type: Number,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['pageChange']);

const goToPreviousPage = () => {
    if (props.currentPage > 1) {
        emit('pageChange', props.currentPage - 1);
    }
};

const goToNextPage = () => {
    if (props.currentPage < props.totalPages) {
        emit('pageChange', props.currentPage + 1);
    }
};
</script>

<style scoped>
.pagination-buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}
</style>
