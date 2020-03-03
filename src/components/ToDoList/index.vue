<template>
	<div id="to-do-list">
		<Header />
		<!-- v-bind:addToDo === :addToDo -->
		<Input :add-to-do="addToDo" />
		<List
			:to-dos="toDos"
			:remove-to-do="removeToDo"
			:complete-to-do="completeToDo"
		/>
		<Footer />
	</div>
</template>

<script>
export default {
	name: 'ToDoList',
	components: {
		Header: () => import('./Header'),
		Input: () => import('./Input'),
		List: () => import('./List'),
		Footer: () => import('./Footer'),
	},
	data() {
		return {
			toDos: [{ toDo: 'sample', key: new Date().getTime(), completed: false }],
		};
	},
	methods: {
		addToDo(toDo) {
			if (toDo) {
				this.toDos.push({
					toDo,
					key: new Date().getTime(),
					completed: false,
				});
			}
		},
		removeToDo(key) {
			this.toDos = this.toDos.filter(toDo => toDo.key !== key);
		},
		completeToDo(key) {
			this.toDos = this.toDos.map(toDo => {
				if (toDo.key === key) {
					return { ...toDo, completed: !toDo.completed };
				}

				return toDo;
			});
		},
	},
};
</script>
