import { defineStore } from "pinia";

interface State {
  components: any[];
  selectedComponent: any;
}

export const useEditorStore = defineStore("editor", {
  state(): State {
    return {
      components: [],
      selectedComponent: {},
    };
  },
  getters: {
    getComponents(): any[] {
      return this.components;
    },
    getSelectedComponent(): any {
      return this.selectedComponent;
    },
  },
  actions: {
    addComponent(component: any) {
      this.components.push(component);
    },
    removeComponent(index: number) {
      this.components.splice(index, 1);
    },
    updateComponent(index: number, component: any) {
      this.components[index] = component;
    },
    setSelectedComponent(component: any) {
      this.selectedComponent = component;
    },
  },
});
