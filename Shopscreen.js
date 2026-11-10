
import React, { useContext, useState } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { CartContext } from '../context/CartContext';

import { styles } from '../styles/styles';

// Sample products
const products = [
  {
    id: '1',
    name: 'Headphones',
    price: 1500
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 2000
  },
  {
    id: '3',
    name: 'Wireless Mouse',
    price: 800
  },
  {
    id: '4',
    name: 'Keyboard',
    price: 1200
  }
];

export default function ShopScreen() {

  // Access global state using useContext
  const { addToCart } = useContext(CartContext);

  // Loading state
  const [savingId, setSavingId] = useState(null);

  // Add selected product
  const handleAddToCart = (product) => {

    setSavingId(product.id);

    // Show loading message before adding
    setTimeout(() => {

      addToCart(product);

      setSavingId(null);

    }, 1000);

  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        MY SHOP
      </Text>

      <Text style={styles.subtitle}>
        Discover our available products.
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.productCard}>

            <Text style={styles.productName}>
              {item.name}
            </Text>

            <Text style={styles.productPrice}>
              ₱{item.price.toLocaleString()}
            </Text>

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => handleAddToCart(item)}
              disabled={savingId !== null}
            >

              <Text style={styles.addButtonText}>
                {savingId === item.id
                  ? 'Adding...'
                  : '+ Add to Cart'}
              </Text>

            </TouchableOpacity>

          </View>

        )}
      />

      {savingId !== null && (
        <Text style={styles.loadingText}>
          Saving your selection...
        </Text>
      )}

    </View>

  );

}
