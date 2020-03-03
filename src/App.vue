<template>
	<div id="app">
		<ToDoList />
		<Counter />
	</div>
</template>

<script>
export default {
	name: 'App',
	components: {
		ToDoList: () => import('./components/ToDoList'),
		Counter: () => import('./components/Counter'),
	},
};
</script>
