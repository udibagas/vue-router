import { onMounted, ref } from "vue";

export default function useCrud(url) {
  const data = ref([]);
  const form = ref({});
  const errors = ref([]);
  const isLoading = ref(true);
  const isError = ref(false);
  const isFormOpen = ref(false);
  const isEditing = ref(false);
  const editedData = ref({});

  async function create() {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    return json;
  }

  async function update(id) {
    const res = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    return json;
  }

  async function fetchAll() {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return json;
  }

  async function fetchOne(id) {
    const res = await fetch(`${url}/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    return json;
  }

  async function destroy(id) {
    const res = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const json = await res.json();
    return json;
  }

  function handleEdit(id) {
    editedData.value = data.find((d) => d.id == id);
    isEditing.value = true;
    isFormOpen.value = true;
  }

  onMounted(() => {
    fetchAll();
  });

  return {
    create,
    update,
    fetchAll,
    fetchOne,
    destroy,
    data,
    form,
    errors,
    isLoading,
    isError,
    isEditing,
    isFormOpen,
    editedData,
    handleEdit,
  };
}
