
import React, { useContext } from 'react';

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { CartContext } from '../context/CartContext';

import { styles } from '../styles/styles';

export default function CartScreen() {

  // Access shared cart data
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice
  } = useContext(CartContext);

  return (

    <View style={styles.container}>

      <Text style={styles.title}>
        MY CART
      </Text>

      <Text style={styles.subtitle}>
        Your selected products.
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.cartCard}>

            <Text style={styles.cartName}>
              {item.name}
            </Text>

            <Text style={styles.cartPrice}>
              ₱{item.price.toLocaleString()} each
            </Text>

            <View style={styles.quantityRow}>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, -1)}
              >
                <Text style={styles.quantityButtonText}>
                  -
                </Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>
                {item.quantity}
              </Text>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={() => updateQuantity(item.id, 1)}
              >
                <Text style={styles.quantityButtonText}>
                  +
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => removeFromCart(item.id)}
              >
                <Text style={styles.removeText}>
                  Remove
                </Text>
              </TouchableOpacity>

            </View>

          </View>

        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Your cart is currently empty.
          </Text>
        }
      />

      <View style={styles.totalContainer}>

        <Text style={styles.totalText}>
          Total: ₱{totalPrice.toLocaleString()}
        </Text>

      </View>

    </View>

  );

}
