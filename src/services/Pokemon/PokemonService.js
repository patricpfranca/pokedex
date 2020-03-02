import api from '~/services/api';

class PokemonService {
  static async index(value) {
    try {
      const listPokemon = [];

      for (let index = 1; index <= value; index++) {
        const response = await api.get(`/pokemon/${index}`);

        listPokemon.push(response.data);
      }

      return listPokemon;
    } catch (err) {
      console.log(err);
    }
  }
}

export default PokemonService;
