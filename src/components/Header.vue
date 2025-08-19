<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <a class="btn btn-ghost text-xl">My App</a>
    </div>
    <div class="flex-1 flex gap-4 mr-6">
      <router-link
        v-for="(route, index) in routes"
        :key="index"
        :to="route.path"
        active-class="border-b-2 border-purple-500 text-purple-500"
        >{{ route.label }}</router-link
      >
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <ShoppingCart />
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li>
            <router-link to="/profile">Profile</router-link>
          </li>
          <li><a>Settings</a></li>
          <li><a @click.prevent="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const routes = [
  { path: "/", label: "Home" },
  { path: "/contact", label: "Contact" },
  { path: "/login", label: "Login" },
  { path: "/register", label: "Register" },
  { path: "/admin", label: "Admin" },
];

import { ShoppingCart } from "lucide-vue-next";
import { useRouter } from "vue-router";

const router = useRouter();

function logout() {
  localStorage.removeItem("token");
  router.push("/");
}
</script>
