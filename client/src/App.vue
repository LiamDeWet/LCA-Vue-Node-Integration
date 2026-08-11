<script setup>
//import onmounted to run the code as the component loads
import { ref, onMounted } from "vue";
//axios for the http methods
import axios from "axios";

const products = ref([]);
const newProduct = ref({
  name: "",
  price: "",
  category: "",
});

//part of the stretch goal
const editingId = ref(null);
const editProduct = ref({
  name: "",
  price: "",
  category: "",
});

const API_URL = "http://localhost:3000/products";

async function getProducts() {
  try {
    const response = await axios.get(API_URL);
    products.value = response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

//creating each function for each feature(add, delete)
async function addProduct() {
  try {
    const response = await axios.post(API_URL, {
      name: newProduct.value.name,
      price: Number(newProduct.value.price),
      category: newProduct.value.category,
    });

    products.value = response.data;

    newProduct.value = {
      name: "",
      price: "",
      category: "",
    };
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

async function deleteProduct(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);

    products.value = response.data;
  } catch (error) {
    console.error("Error deleting product:", error);
  }
}

async function updateProduct() {
  try {
    const response = await axios.put(`${API_URL}/${editingId.value}`, {
      name: editProduct.value.name,
      price: Number(editProduct.value.price),
      category: editProduct.value.category,
    });

    products.value = response.data;
    editingId.vlaue = null;
    editProduct.value = {
      name: "",
      price: "",
      category: "",
    };
  } catch (error) {
    console.error("Error updating product:", error);
  }
}

function startEditing(product) {
  editingId.value = product.id;

  editProduct.value = {
    name: product.name,
    price: product.price,
    category: product.category,
  };
}

onMounted(() => {
  getProducts();
});
</script>

<template>
  <div class="container">
    <h1>TechVibe Product Catalogue</h1>

    <form @submit.prevent="addProduct">
      <input
        v-model="newProduct.name"
        type="text"
        placeholder="Product name"
        required
      />

      <input
        v-model="newProduct.price"
        type="number"
        step="0.01"
        placeholder="Price"
        required
      />

      <input
        v-model="newProduct.category"
        type="text"
        placeholder="Category"
        required
      />

      <button type="submit">Add Product</button>
    </form>

    <!-- Edit product form -->
    <div v-if="editingId !== null">
      <h2>Edit Product</h2>

      <form @submit.prevent="updateProduct">
        <input
          v-model="editProduct.name"
          type="text"
          placeholder="Product name"
          required
        />

        <input
          v-model="editProduct.price"
          type="number"
          step="0.01"
          placeholder="Price"
          required
        />

        <input
          v-model="editProduct.category"
          type="text"
          placeholder="Category"
          required
        />

        <button type="submit">Save Changes</button>

        <button type="button" @click="editingId = null">Cancel</button>
      </form>
    </div>

    <h2>Products</h2>
    <div v-if="products.length === 0">No products available.</div>

    <div v-for="product in products" :key="product.id" class="product-card">
      <h3>{{ product.name }}</h3>
      <p>Price: R{{ product.price }}</p>
      <p>Category: {{ product.category }}</p>

      <!-- Edit the selected product -->
      <button @click="startEditing(product)">Edit</button>

      <!-- Delete the selected product -->
      <button @click="deleteProduct(product.id)">Delete</button>
    </div>
  </div>
</template>
