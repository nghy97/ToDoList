<template>
	<div class="input">
		<input v-model="toDo" type="text" @keyup.enter="resetToDo()" />
		<button @click="resetToDo()">
			추가
		</button>
	</div>
</template>

<script>
export default {
	props: {
		addToDo: {
			type: Function,
			default: () => false,
		},
	},
	data() {
		return {
			toDo: '',
		};
	},
	methods: {
		resetToDo() {
			this.addToDo(this.toDo);
			this.toDo = '';
		},
	},
};
</script>

<style></style>
