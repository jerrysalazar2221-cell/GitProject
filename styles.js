
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 8
  },

  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20
  },

  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5
  },

  productPrice: {
    fontSize: 16,
    color: '#2196F3',
    marginBottom: 12
  },

  addButton: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },

  addButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },

  cartCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2
  },

  cartName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },

  cartPrice: {
    color: '#2196F3',
    marginTop: 5
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 15
  },

  quantityButton: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 6
  },

  quantityButtonText: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 16
  },

  quantityText: {
    fontWeight: 'bold',
    fontSize: 16
  },

  removeButton: {
    marginLeft: 'auto'
  },

  removeText: {
    color: '#E53935',
    fontWeight: 'bold'
  },

  totalContainer: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 12,
    marginTop: 10
  },

  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center'
  },

  emptyText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16
  },

  loadingText: {
    color: '#2196F3',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold'
  }

});

