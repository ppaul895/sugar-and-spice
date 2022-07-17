import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

// Search Page Styling from Template, edited
const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  btnIcon: {
    height: 14,
    width: 14
  }
});

export default styles;
