<template>
    <div class="horario-tabela">
      <h2>Horários</h2>
      <table>
        <thead>
          <tr>
            <th>Período</th>
            <th>Horário</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(horario, index) in horarios" :key="index">
            <td>{{ horario.periodo }}</td>
            <td>{{ horario.horario }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TableComponent',
    props: {
      horarios: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .horario-tabela {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  
  .horario-tabela table {
    width: 80%;
    border-collapse: collapse;
  }
  
  .horario-tabela th, .horario-tabela td {
    border: 1px solid #ddd;
    padding: 8px;
    width: 50%;
  }
  
  .horario-tabela th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  .horario-tabela td {
    text-align: center;
  }

  thead tr th {
    text-align: center;
  }

  h2 {
    font-family: var(--baloo);
    text-align: center;
    color: var(--orange);
    font-weight: 800;
  }

  
  
  </style>