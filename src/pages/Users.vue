<template>
  <h1>User</h1>

  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="user in data" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>
          <button @click="destroy(user.id)">Delete</button>
          <button @click="handleEdit(user.id)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import useCrud from "@/composables/useCrud";

const { destroy, data, editedData, isEditing, isFormOpen, handleEdit } =
  useCrud("/api/users");
</script>
