// Gerado por backend/app/lab/site_data.py; não edite à mão.
window.DADOS = {
 "primeiro": [
  {
   "detector": "Limiar fixo (regra)",
   "criterio": "regra do operador (-27 dBm)",
   "limiar": 27.0,
   "episodios": 356,
   "acertos": 6,
   "precisao": 0.017,
   "precisao_ic95": "0.00–0.05",
   "eventos": 24,
   "detectados": 4,
   "revocacao": 0.167,
   "revocacao_ic95": "0.00–0.68",
   "f1": 0.031,
   "f1_ic95": "0.00–0.10",
   "falsos_por_dia": 88.4,
   "antecedencia_mediana_h": 23.0,
   "quedas_novas": 6,
   "novas_detectadas": 2
  },
  {
   "detector": "Queda nas 24 h anteriores (ingênuo)",
   "criterio": "limiar escolhido no treino",
   "limiar": 1.0,
   "episodios": 318,
   "acertos": 21,
   "precisao": 0.066,
   "precisao_ic95": "0.01–0.13",
   "eventos": 24,
   "detectados": 21,
   "revocacao": 0.875,
   "revocacao_ic95": "0.61–1.00",
   "f1": 0.123,
   "f1_ic95": "0.02–0.22",
   "falsos_por_dia": 75.0,
   "antecedencia_mediana_h": 23.0,
   "quedas_novas": 6,
   "novas_detectadas": 3
  },
  {
   "detector": "Limiar fixo (regra)",
   "criterio": "limiar escolhido no treino",
   "limiar": 32.743,
   "episodios": 24,
   "acertos": 0,
   "precisao": 0.0,
   "precisao_ic95": "0.00–0.00",
   "eventos": 24,
   "detectados": 0,
   "revocacao": 0.0,
   "revocacao_ic95": "0.00–0.00",
   "f1": 0.0,
   "f1_ic95": "0.00–0.00",
   "falsos_por_dia": 6.1,
   "antecedencia_mediana_h": null,
   "quedas_novas": 6,
   "novas_detectadas": 0
  },
  {
   "detector": "Z-score móvel 24 h",
   "criterio": "limiar escolhido no treino",
   "limiar": 2.401,
   "episodios": 17,
   "acertos": 0,
   "precisao": 0.0,
   "precisao_ic95": "0.00–0.00",
   "eventos": 24,
   "detectados": 0,
   "revocacao": 0.0,
   "revocacao_ic95": "0.00–0.00",
   "f1": 0.0,
   "f1_ic95": "0.00–0.00",
   "falsos_por_dia": 4.3,
   "antecedencia_mediana_h": null,
   "quedas_novas": 6,
   "novas_detectadas": 0
  },
  {
   "detector": "Sazonal + resíduo",
   "criterio": "limiar escolhido no treino",
   "limiar": 2.896,
   "episodios": 36,
   "acertos": 5,
   "precisao": 0.139,
   "precisao_ic95": "0.03–0.31",
   "eventos": 24,
   "detectados": 7,
   "revocacao": 0.292,
   "revocacao_ic95": "0.09–0.57",
   "f1": 0.188,
   "f1_ic95": "0.04–0.36",
   "falsos_por_dia": 7.8,
   "antecedencia_mediana_h": 18.0,
   "quedas_novas": 6,
   "novas_detectadas": 1
  },
  {
   "detector": "CUSUM",
   "criterio": "limiar escolhido no treino",
   "limiar": 0.88,
   "episodios": 248,
   "acertos": 19,
   "precisao": 0.077,
   "precisao_ic95": "0.01–0.15",
   "eventos": 24,
   "detectados": 20,
   "revocacao": 0.833,
   "revocacao_ic95": "0.50–1.00",
   "f1": 0.14,
   "f1_ic95": "0.02–0.26",
   "falsos_por_dia": 57.9,
   "antecedencia_mediana_h": 21.5,
   "quedas_novas": 6,
   "novas_detectadas": 4
  },
  {
   "detector": "Isolation Forest",
   "criterio": "limiar escolhido no treino",
   "limiar": 0.721,
   "episodios": 48,
   "acertos": 11,
   "precisao": 0.229,
   "precisao_ic95": "0.05–0.39",
   "eventos": 24,
   "detectados": 10,
   "revocacao": 0.417,
   "revocacao_ic95": "0.08–0.75",
   "f1": 0.296,
   "f1_ic95": "0.07–0.47",
   "falsos_por_dia": 9.3,
   "antecedencia_mediana_h": 16.5,
   "quedas_novas": 6,
   "novas_detectadas": 1
  },
  {
   "detector": "Random Forest (supervisionado)",
   "criterio": "limiar escolhido no treino",
   "limiar": 0.18,
   "episodios": 269,
   "acertos": 9,
   "precisao": 0.033,
   "precisao_ic95": "0.00–0.07",
   "eventos": 24,
   "detectados": 11,
   "revocacao": 0.458,
   "revocacao_ic95": "0.00–0.86",
   "f1": 0.062,
   "f1_ic95": "0.00–0.13",
   "falsos_por_dia": 65.7,
   "antecedencia_mediana_h": 23.0,
   "quedas_novas": 6,
   "novas_detectadas": 2
  },
  {
   "detector": "Random Forest + histórico de quedas",
   "criterio": "limiar escolhido no treino",
   "limiar": 0.284,
   "episodios": 118,
   "acertos": 12,
   "precisao": 0.102,
   "precisao_ic95": "0.00–0.23",
   "eventos": 24,
   "detectados": 10,
   "revocacao": 0.417,
   "revocacao_ic95": "0.00–0.81",
   "f1": 0.163,
   "f1_ic95": "0.00–0.32",
   "falsos_por_dia": 26.8,
   "antecedencia_mediana_h": 15.0,
   "quedas_novas": 6,
   "novas_detectadas": 1
  }
 ],
 "melhorias": [
  {
   "tecnica": "Queda nas 24 h anteriores (ingênuo)",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 1411,
   "quedas_avisadas": 6,
   "quedas": 12,
   "falsos": 1404,
   "falsos_por_dia": 200.6,
   "precisao": 0.005,
   "revocacao": 0.5,
   "f1": 0.01,
   "antecedencia_mediana_h": 23.0,
   "quedas_novas_avisadas": "2/8"
  },
  {
   "tecnica": "Regra do operador (-27 dBm)",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 630,
   "quedas_avisadas": 7,
   "quedas": 12,
   "falsos": 621,
   "falsos_por_dia": 88.7,
   "precisao": 0.014,
   "revocacao": 0.583,
   "f1": 0.028,
   "antecedencia_mediana_h": 18.0,
   "quedas_novas_avisadas": "5/8"
  },
  {
   "tecnica": "Limiar fixo (regra)",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 555,
   "quedas_avisadas": 5,
   "quedas": 12,
   "falsos": 545,
   "falsos_por_dia": 77.9,
   "precisao": 0.018,
   "revocacao": 0.417,
   "f1": 0.035,
   "antecedencia_mediana_h": 24.0,
   "quedas_novas_avisadas": "3/8"
  },
  {
   "tecnica": "Limiar fixo (regra)",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 10,
   "quedas_avisadas": 0,
   "quedas": 9,
   "falsos": 10,
   "falsos_por_dia": 1.7,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Limiar fixo (regra)",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 152,
   "quedas_avisadas": 0,
   "quedas": 9,
   "falsos": 152,
   "falsos_por_dia": 25.3,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Limiar fixo (regra)",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 79,
   "quedas_avisadas": 0,
   "quedas": 9,
   "falsos": 79,
   "falsos_por_dia": 13.2,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 99,
   "quedas_avisadas": 2,
   "quedas": 11,
   "falsos": 96,
   "falsos_por_dia": 14.8,
   "precisao": 0.03,
   "revocacao": 0.182,
   "f1": 0.052,
   "antecedencia_mediana_h": 11.5,
   "quedas_novas_avisadas": "2/8"
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 196,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 195,
   "falsos_por_dia": 30.0,
   "precisao": 0.005,
   "revocacao": 0.091,
   "f1": 0.01,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 190,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 189,
   "falsos_por_dia": 29.1,
   "precisao": 0.005,
   "revocacao": 0.091,
   "f1": 0.01,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 158,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 157,
   "falsos_por_dia": 24.2,
   "precisao": 0.006,
   "revocacao": 0.091,
   "f1": 0.012,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Sazonal + resíduo",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 101,
   "quedas_avisadas": 0,
   "quedas": 11,
   "falsos": 101,
   "falsos_por_dia": 14.4,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Sazonal + resíduo",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 90,
   "quedas_avisadas": 0,
   "quedas": 11,
   "falsos": 90,
   "falsos_por_dia": 12.9,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Sazonal + resíduo",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 97,
   "quedas_avisadas": 0,
   "quedas": 10,
   "falsos": 97,
   "falsos_por_dia": 13.9,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "Sazonal + resíduo",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 49,
   "quedas_avisadas": 0,
   "quedas": 10,
   "falsos": 49,
   "falsos_por_dia": 7.0,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/7"
  },
  {
   "tecnica": "CUSUM",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 278,
   "quedas_avisadas": 3,
   "quedas": 11,
   "falsos": 275,
   "falsos_por_dia": 39.3,
   "precisao": 0.011,
   "revocacao": 0.273,
   "f1": 0.021,
   "antecedencia_mediana_h": 21.0,
   "quedas_novas_avisadas": "3/7"
  },
  {
   "tecnica": "CUSUM",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 165,
   "quedas_avisadas": 2,
   "quedas": 11,
   "falsos": 160,
   "falsos_por_dia": 22.9,
   "precisao": 0.03,
   "revocacao": 0.182,
   "f1": 0.052,
   "antecedencia_mediana_h": 18.0,
   "quedas_novas_avisadas": "2/7"
  },
  {
   "tecnica": "CUSUM",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 343,
   "quedas_avisadas": 3,
   "quedas": 10,
   "falsos": 340,
   "falsos_por_dia": 48.6,
   "precisao": 0.009,
   "revocacao": 0.3,
   "f1": 0.017,
   "antecedencia_mediana_h": 21.0,
   "quedas_novas_avisadas": "3/7"
  },
  {
   "tecnica": "CUSUM",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 214,
   "quedas_avisadas": 3,
   "quedas": 10,
   "falsos": 212,
   "falsos_por_dia": 30.3,
   "precisao": 0.009,
   "revocacao": 0.3,
   "f1": 0.018,
   "antecedencia_mediana_h": 21.0,
   "quedas_novas_avisadas": "3/7"
  },
  {
   "tecnica": "Isolation Forest",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 75,
   "quedas_avisadas": 1,
   "quedas": 12,
   "falsos": 74,
   "falsos_por_dia": 10.6,
   "precisao": 0.013,
   "revocacao": 0.083,
   "f1": 0.023,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Isolation Forest",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 77,
   "quedas_avisadas": 1,
   "quedas": 12,
   "falsos": 76,
   "falsos_por_dia": 10.9,
   "precisao": 0.013,
   "revocacao": 0.083,
   "f1": 0.022,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Isolation Forest",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 95,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 94,
   "falsos_por_dia": 13.4,
   "precisao": 0.011,
   "revocacao": 0.091,
   "f1": 0.019,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Isolation Forest",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 42,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 41,
   "falsos_por_dia": 5.9,
   "precisao": 0.024,
   "revocacao": 0.091,
   "f1": 0.038,
   "antecedencia_mediana_h": 1.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Random Forest (supervisionado)",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 445,
   "quedas_avisadas": 1,
   "quedas": 12,
   "falsos": 444,
   "falsos_por_dia": 63.4,
   "precisao": 0.002,
   "revocacao": 0.083,
   "f1": 0.004,
   "antecedencia_mediana_h": 6.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Random Forest (supervisionado)",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 445,
   "quedas_avisadas": 0,
   "quedas": 12,
   "falsos": 445,
   "falsos_por_dia": 63.6,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/8"
  },
  {
   "tecnica": "Random Forest (supervisionado)",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 245,
   "quedas_avisadas": 0,
   "quedas": 11,
   "falsos": 245,
   "falsos_por_dia": 35.0,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/8"
  },
  {
   "tecnica": "Random Forest (supervisionado)",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 120,
   "quedas_avisadas": 0,
   "quedas": 11,
   "falsos": 120,
   "falsos_por_dia": 17.1,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/8"
  },
  {
   "tecnica": "Random Forest + histórico de quedas",
   "etapa": "E0",
   "descricao": "Original",
   "avisos": 275,
   "quedas_avisadas": 1,
   "quedas": 12,
   "falsos": 274,
   "falsos_por_dia": 39.1,
   "precisao": 0.004,
   "revocacao": 0.083,
   "f1": 0.007,
   "antecedencia_mediana_h": 18.0,
   "quedas_novas_avisadas": "1/8"
  },
  {
   "tecnica": "Random Forest + histórico de quedas",
   "etapa": "E1",
   "descricao": "+ sinal relativo (PON e nível próprio)",
   "avisos": 320,
   "quedas_avisadas": 0,
   "quedas": 12,
   "falsos": 320,
   "falsos_por_dia": 45.7,
   "precisao": 0.0,
   "revocacao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null,
   "quedas_novas_avisadas": "0/8"
  },
  {
   "tecnica": "Random Forest + histórico de quedas",
   "etapa": "E2",
   "descricao": "+ quarentena após religar (6 h)",
   "avisos": 1008,
   "quedas_avisadas": 4,
   "quedas": 11,
   "falsos": 996,
   "falsos_por_dia": 142.3,
   "precisao": 0.012,
   "revocacao": 0.364,
   "f1": 0.023,
   "antecedencia_mediana_h": 19.0,
   "quedas_novas_avisadas": "3/8"
  },
  {
   "tecnica": "Random Forest + histórico de quedas",
   "etapa": "E3",
   "descricao": "+ aviso único por ONU em 24 h",
   "avisos": 167,
   "quedas_avisadas": 1,
   "quedas": 11,
   "falsos": 166,
   "falsos_por_dia": 23.7,
   "precisao": 0.006,
   "revocacao": 0.091,
   "f1": 0.011,
   "antecedencia_mediana_h": 18.0,
   "quedas_novas_avisadas": "1/8"
  }
 ],
 "diagnostico": [
  {
   "detector": "Queda nas 24 h anteriores (ingênuo)",
   "alertas": 1411,
   "falsos": 1404,
   "quedas_avisadas": "6/12",
   "onus_com_falso": 503,
   "top5_onus_%": 4,
   "cronico": 15,
   "pos_retorno": 98,
   "pon": 99,
   "oscilacao": 0,
   "repetitiva": 64,
   "sem_causa": 0
  },
  {
   "detector": "Limiar fixo (regra)",
   "alertas": 555,
   "falsos": 545,
   "quedas_avisadas": "5/12",
   "onus_com_falso": 92,
   "top5_onus_%": 21,
   "cronico": 89,
   "pos_retorno": 34,
   "pon": 95,
   "oscilacao": 1,
   "repetitiva": 93,
   "sem_causa": 0
  },
  {
   "detector": "Z-score móvel 24 h",
   "alertas": 99,
   "falsos": 96,
   "quedas_avisadas": "2/11",
   "onus_com_falso": 49,
   "top5_onus_%": 26,
   "cronico": 21,
   "pos_retorno": 7,
   "pon": 33,
   "oscilacao": 6,
   "repetitiva": 46,
   "sem_causa": 17
  },
  {
   "detector": "Sazonal + resíduo",
   "alertas": 101,
   "falsos": 101,
   "quedas_avisadas": "0/11",
   "onus_com_falso": 24,
   "top5_onus_%": 48,
   "cronico": 0,
   "pos_retorno": 23,
   "pon": 43,
   "oscilacao": 8,
   "repetitiva": 86,
   "sem_causa": 2
  },
  {
   "detector": "CUSUM",
   "alertas": 278,
   "falsos": 275,
   "quedas_avisadas": "3/11",
   "onus_com_falso": 113,
   "top5_onus_%": 16,
   "cronico": 39,
   "pos_retorno": 20,
   "pon": 85,
   "oscilacao": 3,
   "repetitiva": 63,
   "sem_causa": 0
  },
  {
   "detector": "Isolation Forest",
   "alertas": 75,
   "falsos": 74,
   "quedas_avisadas": "1/12",
   "onus_com_falso": 29,
   "top5_onus_%": 49,
   "cronico": 27,
   "pos_retorno": 36,
   "pon": 0,
   "oscilacao": 20,
   "repetitiva": 61,
   "sem_causa": 8
  },
  {
   "detector": "Random Forest (supervisionado)",
   "alertas": 445,
   "falsos": 444,
   "quedas_avisadas": "1/12",
   "onus_com_falso": 115,
   "top5_onus_%": 26,
   "cronico": 11,
   "pos_retorno": 19,
   "pon": 47,
   "oscilacao": 1,
   "repetitiva": 79,
   "sem_causa": 6
  },
  {
   "detector": "Random Forest + histórico de quedas",
   "alertas": 275,
   "falsos": 274,
   "quedas_avisadas": "1/12",
   "onus_com_falso": 87,
   "top5_onus_%": 23,
   "cronico": 8,
   "pos_retorno": 19,
   "pon": 24,
   "oscilacao": 0,
   "repetitiva": 77,
   "sem_causa": 8
  }
 ],
 "semanal": [
  {
   "tecnica": "Combinação de postos (sem treino)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 3,
   "precisao_ic95": "7%–65%",
   "p_acaso": 0.0002,
   "falsos": 7,
   "caidas": 13,
   "precisao": 0.3,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 21.9,
   "antecedencia_mediana_h": 216.0
  },
  {
   "tecnica": "Regressão logística por ONU (treinada)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 3,
   "precisao_ic95": "7%–65%",
   "p_acaso": 0.0002,
   "falsos": 7,
   "caidas": 13,
   "precisao": 0.3,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 21.9,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Ingênuo só com LINK LOSS",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 2,
   "precisao_ic95": "3%–56%",
   "p_acaso": 0.0074,
   "falsos": 8,
   "caidas": 13,
   "precisao": 0.2,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 14.6,
   "antecedencia_mediana_h": 199.0
  },
  {
   "tecnica": "Sazonal + resíduo",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 2,
   "precisao_ic95": "3%–56%",
   "p_acaso": 0.0074,
   "falsos": 8,
   "caidas": 13,
   "precisao": 0.2,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 14.6,
   "antecedencia_mediana_h": 293.5
  },
  {
   "tecnica": "Isolation Forest",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 2,
   "precisao_ic95": "3%–56%",
   "p_acaso": 0.0074,
   "falsos": 8,
   "caidas": 13,
   "precisao": 0.2,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 14.6,
   "antecedencia_mediana_h": 293.5
  },
  {
   "tecnica": "Regra do operador (Rx mais baixo)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 1,
   "precisao_ic95": "0%–45%",
   "p_acaso": 0.1297,
   "falsos": 9,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 236.0
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 1,
   "precisao_ic95": "0%–45%",
   "p_acaso": 0.1297,
   "falsos": 9,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 333.0
  },
  {
   "tecnica": "CUSUM",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 1,
   "precisao_ic95": "0%–45%",
   "p_acaso": 0.1297,
   "falsos": 9,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 333.0
  },
  {
   "tecnica": "Random Forest + histórico (horário)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 1,
   "precisao_ic95": "0%–45%",
   "p_acaso": 0.1297,
   "falsos": 9,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Ingênuo (horas fora, qualquer motivo)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 0,
   "precisao_ic95": "0%–31%",
   "p_acaso": 1.0,
   "falsos": 10,
   "caidas": 13,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0137,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Microcortes (mergulho dentro da hora)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 0,
   "precisao_ic95": "0%–31%",
   "p_acaso": 1.0,
   "falsos": 10,
   "caidas": 13,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0137,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Random Forest (supervisionado, horário)",
   "k": 10,
   "listas": 1,
   "na_lista": 10,
   "acertos": 0,
   "precisao_ic95": "0%–31%",
   "p_acaso": 1.0,
   "falsos": 10,
   "caidas": 13,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0137,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Ingênuo só com LINK LOSS",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 3,
   "precisao_ic95": "3%–38%",
   "p_acaso": 0.002,
   "falsos": 17,
   "caidas": 13,
   "precisao": 0.15,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 10.9,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Combinação de postos (sem treino)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 3,
   "precisao_ic95": "3%–38%",
   "p_acaso": 0.002,
   "falsos": 17,
   "caidas": 13,
   "precisao": 0.15,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 10.9,
   "antecedencia_mediana_h": 216.0
  },
  {
   "tecnica": "Sazonal + resíduo",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 3,
   "precisao_ic95": "3%–38%",
   "p_acaso": 0.002,
   "falsos": 17,
   "caidas": 13,
   "precisao": 0.15,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 10.9,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Regressão logística por ONU (treinada)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 3,
   "precisao_ic95": "3%–38%",
   "p_acaso": 0.002,
   "falsos": 17,
   "caidas": 13,
   "precisao": 0.15,
   "revocacao": 0.231,
   "taxa_base": 0.0137,
   "x_acaso": 10.9,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Microcortes (mergulho dentro da hora)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 2,
   "precisao_ic95": "1%–32%",
   "p_acaso": 0.0288,
   "falsos": 18,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 235.0
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 2,
   "precisao_ic95": "1%–32%",
   "p_acaso": 0.0288,
   "falsos": 18,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 284.5
  },
  {
   "tecnica": "CUSUM",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 2,
   "precisao_ic95": "1%–32%",
   "p_acaso": 0.0288,
   "falsos": 18,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 293.5
  },
  {
   "tecnica": "Isolation Forest",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 2,
   "precisao_ic95": "1%–32%",
   "p_acaso": 0.0288,
   "falsos": 18,
   "caidas": 13,
   "precisao": 0.1,
   "revocacao": 0.154,
   "taxa_base": 0.0137,
   "x_acaso": 7.3,
   "antecedencia_mediana_h": 293.5
  },
  {
   "tecnica": "Regra do operador (Rx mais baixo)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 1,
   "precisao_ic95": "0%–25%",
   "p_acaso": 0.2437,
   "falsos": 19,
   "caidas": 13,
   "precisao": 0.05,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 3.6,
   "antecedencia_mediana_h": 236.0
  },
  {
   "tecnica": "Random Forest (supervisionado, horário)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 1,
   "precisao_ic95": "0%–25%",
   "p_acaso": 0.2437,
   "falsos": 19,
   "caidas": 13,
   "precisao": 0.05,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 3.6,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Random Forest + histórico (horário)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 1,
   "precisao_ic95": "0%–25%",
   "p_acaso": 0.2437,
   "falsos": 19,
   "caidas": 13,
   "precisao": 0.05,
   "revocacao": 0.077,
   "taxa_base": 0.0137,
   "x_acaso": 3.6,
   "antecedencia_mediana_h": 254.0
  },
  {
   "tecnica": "Ingênuo (horas fora, qualquer motivo)",
   "k": 20,
   "listas": 1,
   "na_lista": 20,
   "acertos": 0,
   "precisao_ic95": "0%–17%",
   "p_acaso": 1.0,
   "falsos": 20,
   "caidas": 13,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0137,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  }
 ],
 "diaria": [
  {
   "tecnica": "Regra do operador (Rx mais baixo)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 3,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 27,
   "caidas": 14,
   "precisao": 0.1,
   "revocacao": 0.214,
   "taxa_base": 0.0049,
   "x_acaso": 20.4,
   "antecedencia_mediana_h": 31.0
  },
  {
   "tecnica": "Regressão logística por ONU (treinada)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 2,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 28,
   "caidas": 14,
   "precisao": 0.067,
   "revocacao": 0.143,
   "taxa_base": 0.0049,
   "x_acaso": 13.6,
   "antecedencia_mediana_h": 22.5
  },
  {
   "tecnica": "Ingênuo só com LINK LOSS",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 1,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 29,
   "caidas": 14,
   "precisao": 0.033,
   "revocacao": 0.071,
   "taxa_base": 0.0049,
   "x_acaso": 6.8,
   "antecedencia_mediana_h": 34.0
  },
  {
   "tecnica": "Ingênuo (horas fora, qualquer motivo)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Microcortes (mergulho dentro da hora)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Combinação de postos (sem treino)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Sazonal + resíduo",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "CUSUM",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Isolation Forest",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Random Forest (supervisionado, horário)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Random Forest + histórico (horário)",
   "k": 10,
   "listas": 3,
   "na_lista": 30,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 30,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Regra do operador (Rx mais baixo)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 3,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 57,
   "caidas": 14,
   "precisao": 0.05,
   "revocacao": 0.214,
   "taxa_base": 0.0049,
   "x_acaso": 10.2,
   "antecedencia_mediana_h": 31.0
  },
  {
   "tecnica": "Z-score móvel 24 h",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 3,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 57,
   "caidas": 14,
   "precisao": 0.05,
   "revocacao": 0.214,
   "taxa_base": 0.0049,
   "x_acaso": 10.2,
   "antecedencia_mediana_h": 31.0
  },
  {
   "tecnica": "Sazonal + resíduo",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 3,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 57,
   "caidas": 14,
   "precisao": 0.05,
   "revocacao": 0.214,
   "taxa_base": 0.0049,
   "x_acaso": 10.2,
   "antecedencia_mediana_h": 31.0
  },
  {
   "tecnica": "Regressão logística por ONU (treinada)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 2,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 58,
   "caidas": 14,
   "precisao": 0.033,
   "revocacao": 0.143,
   "taxa_base": 0.0049,
   "x_acaso": 6.8,
   "antecedencia_mediana_h": 22.5
  },
  {
   "tecnica": "Ingênuo só com LINK LOSS",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 1,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 59,
   "caidas": 14,
   "precisao": 0.017,
   "revocacao": 0.071,
   "taxa_base": 0.0049,
   "x_acaso": 3.4,
   "antecedencia_mediana_h": 34.0
  },
  {
   "tecnica": "Ingênuo (horas fora, qualquer motivo)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Microcortes (mergulho dentro da hora)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Combinação de postos (sem treino)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "CUSUM",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Isolation Forest",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Random Forest (supervisionado, horário)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "tecnica": "Random Forest + histórico (horário)",
   "k": 20,
   "listas": 3,
   "na_lista": 60,
   "acertos": 0,
   "precisao_ic95": null,
   "p_acaso": null,
   "falsos": 60,
   "caidas": 14,
   "precisao": 0.0,
   "revocacao": 0.0,
   "taxa_base": 0.0049,
   "x_acaso": 0.0,
   "antecedencia_mediana_h": null
  }
 ],
 "commits": [
  {
   "data": "2026-10-17",
   "msg": "ISP AI Monitor v0.6: integração Zabbix/SGP, áreas da rede, incidentes e visão geral",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-17",
   "msg": "Anomalias: Rx de ONU, rádio e latência comparados com a referência de 7 dias",
   "tipo": "ia"
  },
  {
   "data": "2026-10-17",
   "msg": "Worker repete tarefa que falhou em 15 min; erro do SGP mostra o motivo",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-17",
   "msg": "Integrações em caixas por fonte, Visão geral com últimos incidentes, equipamento na tela da OLT",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-17",
   "msg": "Topologia montada no sistema: origem provável e impacto dos incidentes",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-17",
   "msg": "Mapa da rede editável (estilo Dude) na Topologia",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-17",
   "msg": "Topologia sem destinos externos (sites): só equipamentos da rede",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-18",
   "msg": "POPs cadastrados no sistema: situação por POP, incidentes por POP e caixas no mapa",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-18",
   "msg": "Acesso só da rede interna e guia para Windows Server",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-18",
   "msg": "Guia de instalação no Proxmox (VM Linux, firewall com IPSet, backup)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-18",
   "msg": "Login: usuários, sessão por cookie, bloqueio por tentativas, tela de usuários",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Login: comando reset-password, log das tentativas recusadas e aviso de qual usuário usar",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Redesign: ícones (lucide-react), menu e topo novos, títulos e painéis com ícone, nova tela de login",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Remove textos informativos: subtítulos descritivos, rodapés e notas explicativas",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Configurações (usuários, integrações, parâmetros), logos dos fabricantes, Fibra e Rádio redesenhados, menu recolhível",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Rádio: CCQ e airMAX ocultos no AirOS 8 (AC), métricas de AirOS 8 reconhecidas, taxa x capacidade",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Rádio: template Zabbix (AirOS 8) para importar e airtime TX/RX separado",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Gráficos: resumo (atual/mín/média/máx/variação), escala justa, média, mín/máx marcados, picos em vermelho, zoom",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Estudo da rede: recomendações por regras para rádios e POPs (7 dias de trends)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Gerador de hosts do Zabbix a partir de planilha de rádios (painéis e enlaces)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Painéis: clientes conectados por estação, regras de painel no estudo e template com dados por cliente",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Painel: clientes airMAX M/AC pela resposta de CINR, contagem no resumo e aviso de troca no estudo",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Clientes do painel: IP 0.0.0.0 (bridge) exibido como sem IP",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Clientes M: IP 0.0.0.0 é limitação de firmware antigo (não bridge); dica na tabela e nota na doc",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-19",
   "msg": "Ignora arquivos de importação gerados por POP (deploy/zabbix/importar/)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Clientes do SGP nos rádios e direção dos painéis",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Mapa real da rede, direção e abertura dos painéis estimadas pelos clientes e pelo modelo",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Abertura do LiteAP GPS (90°) na tabela de modelos",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Configurações: remove o grupo Integrações da aba Parâmetros (já está na aba Integrações)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Mapa: POP com ícone de torre (vermelho com equipamento fora)",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Mapa: ícone da torre sem fundo, com sombra, base no ponto do POP",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Topologia: excluir equipamento (mapa e ligações) e painel de detalhes visível",
   "tipo": "sistema"
  },
  {
   "data": "2026-10-20",
   "msg": "Análise por modelo de linguagem (API do Claude): relatório diário, incidentes, POPs, painéis e perguntas",
   "tipo": "ia"
  },
  {
   "data": "2026-10-20",
   "msg": "IA: fallbacks só em modelos que aceitam (permite AI_MODEL=claude-haiku-5-5)",
   "tipo": "ia"
  },
  {
   "data": "2026-10-20",
   "msg": "Diagnóstico de incidentes: rótulos do operador, baseline por regras e causa estruturada da IA",
   "tipo": "ia"
  },
  {
   "data": "2026-10-27",
   "msg": "Experimento de diagnóstico: regras x modelos de linguagem, com opção local gratuita (Ollama)",
   "tipo": "ia"
  },
  {
   "data": "2026-10-27",
   "msg": "Slides da atividade 4 (IA Aplicada): PPTX e PDF",
   "tipo": "ia"
  },
  {
   "data": "2026-10-27",
   "msg": "Provedores de IA: Gemini gratuito e Ollama local além da API do Claude",
   "tipo": "ia"
  },
  {
   "data": "2026-10-27",
   "msg": "Dispositivos: desativar só no sistema e respeitar hosts desativados no Zabbix",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-03",
   "msg": "Experimento de detecção de anomalias no sinal das ONUs",
   "tipo": "ia"
  },
  {
   "data": "2026-11-15",
   "msg": "Experimento de anomalias: rádios, Random Forest com histórico e triagem por LLM",
   "tipo": "ia"
  },
  {
   "data": "2026-11-15",
   "msg": "Interface no celular: menu em gaveta e topo compacto",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Clientes em risco: Isolation Forest no Rx das ONUs, conferido com as quedas reais",
   "tipo": "ia"
  },
  {
   "data": "2026-11-15",
   "msg": "Template Zabbix para rádios airMAX M (AirOS 6)",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Topologia: organizar o mapa por POP e exportar a documentação da rede",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Abertura das antenas: padrões da rede e abertura/azimute na documentação",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Mapa da rede: ligações entre as torres, coordenadas suspeitas e visual mais limpo",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Mapa da rede: limite de 10 km, botões de camadas e login estável ao reiniciar o backend",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Mapa da rede: filtro por POP e por painel",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Mapa da rede: novo visual com painel do POP, estado das torres e tela cheia",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "SSID dos rádios e zoom estável no Mapa da rede",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Histórico do sinal, avisos por Telegram, mudanças nos rádios e busca de clientes (backend)",
   "tipo": "ia"
  },
  {
   "data": "2026-11-15",
   "msg": "Menu reorganizado, ficha do cliente, busca global e tela de avisos (frontend)",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Ficha do cliente completa, nomes nos clientes em risco e padrão de filtros",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-15",
   "msg": "Animações com Motion no frontend",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-16",
   "msg": "Cabeçalho padrão em todas as listas, Visão geral reorganizada e filtros em Rádio e Fibra",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-17",
   "msg": "Padrão visual nas telas que faltavam",
   "tipo": "sistema"
  },
  {
   "data": "2026-11-17",
   "msg": "Arquivo horário do sinal das ONUs e rádios",
   "tipo": "ia"
  },
  {
   "data": "2026-11-17",
   "msg": "Diagnóstico dos falsos positivos, lista semanal de risco e site do projeto",
   "tipo": "ia"
  },
  {
   "data": "2026-11-17",
   "msg": "Auditoria das IAs: falsos/dia corrigidos, sugestões testadas e margem de erro da lista semanal",
   "tipo": "ia"
  }
 ],
 "sugestoes": [
  {
   "sugestao": "Histerese + supressão de massa (DeepSeek)",
   "aviso_unico_24h": false,
   "avisos": 53,
   "quedas_avisadas": 0,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 53,
   "falsos_por_dia": 7.6,
   "precisao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "sugestao": "Histerese + supressão de massa (DeepSeek)",
   "aviso_unico_24h": true,
   "avisos": 12,
   "quedas_avisadas": 0,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 12,
   "falsos_por_dia": 1.7,
   "precisao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "sugestao": "Regra por transição/piora (ChatGPT)",
   "aviso_unico_24h": false,
   "avisos": 427,
   "quedas_avisadas": 4,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 422,
   "falsos_por_dia": 60.3,
   "precisao": 0.012,
   "f1": 0.023,
   "antecedencia_mediana_h": 14.0
  },
  {
   "sugestao": "Regra por transição/piora (ChatGPT)",
   "aviso_unico_24h": true,
   "avisos": 106,
   "quedas_avisadas": 4,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 102,
   "falsos_por_dia": 14.6,
   "precisao": 0.038,
   "f1": 0.068,
   "antecedencia_mediana_h": 14.0
  },
  {
   "sugestao": "Z-score persistente 3 h (Gemini, DeepSeek)",
   "aviso_unico_24h": false,
   "avisos": 36,
   "quedas_avisadas": 1,
   "quedas_com_sinal": 11,
   "quedas_teste": 16,
   "falsos": 35,
   "falsos_por_dia": 5.5,
   "precisao": 0.028,
   "f1": 0.043,
   "antecedencia_mediana_h": 18.0
  },
  {
   "sugestao": "Z-score persistente 3 h (Gemini, DeepSeek)",
   "aviso_unico_24h": true,
   "avisos": 34,
   "quedas_avisadas": 1,
   "quedas_com_sinal": 11,
   "quedas_teste": 16,
   "falsos": 33,
   "falsos_por_dia": 5.1,
   "precisao": 0.029,
   "f1": 0.044,
   "antecedencia_mediana_h": 18.0
  },
  {
   "sugestao": "Regressão logística L1, atributos novos (as três)",
   "aviso_unico_24h": false,
   "avisos": 17,
   "quedas_avisadas": 0,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 17,
   "falsos_por_dia": 2.4,
   "precisao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "sugestao": "Regressão logística L1, atributos novos (as três)",
   "aviso_unico_24h": true,
   "avisos": 5,
   "quedas_avisadas": 0,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 5,
   "falsos_por_dia": 0.7,
   "precisao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null
  },
  {
   "sugestao": "Gradient boosting raso, atributos novos (as três)",
   "aviso_unico_24h": false,
   "avisos": 129,
   "quedas_avisadas": 1,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 128,
   "falsos_por_dia": 18.3,
   "precisao": 0.008,
   "f1": 0.014,
   "antecedencia_mediana_h": 22.0
  },
  {
   "sugestao": "Gradient boosting raso, atributos novos (as três)",
   "aviso_unico_24h": true,
   "avisos": 6,
   "quedas_avisadas": 0,
   "quedas_com_sinal": 12,
   "quedas_teste": 16,
   "falsos": 6,
   "falsos_por_dia": 0.9,
   "precisao": 0.0,
   "f1": 0.0,
   "antecedencia_mediana_h": null
  }
 ],
 "sinais": [
  {
   "onu": "ONU-0553",
   "tipo": "microcortes",
   "pontos": [
    {
     "h": -40,
     "avg": -29.33,
     "min": -29.58,
     "los": false
    },
    {
     "h": -39,
     "avg": -29.45,
     "min": -29.58,
     "los": false
    },
    {
     "h": -38,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": -37,
     "avg": -29.73,
     "min": -30.0,
     "los": false
    },
    {
     "h": -36,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -35,
     "avg": -29.45,
     "min": -29.58,
     "los": false
    },
    {
     "h": -34,
     "avg": -29.45,
     "min": -29.58,
     "los": false
    },
    {
     "h": -33,
     "avg": -29.59,
     "min": -30.0,
     "los": false
    },
    {
     "h": -32,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -31,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -30,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -29,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -28,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -27,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -26,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -25,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -24,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -23,
     "avg": -33.33,
     "min": -40.0,
     "los": false
    },
    {
     "h": -22,
     "avg": -30.0,
     "min": -30.0,
     "los": false
    },
    {
     "h": -21,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -20,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -19,
     "avg": -29.86,
     "min": -30.0,
     "los": false
    },
    {
     "h": -18,
     "avg": -29.47,
     "min": -30.0,
     "los": false
    },
    {
     "h": -17,
     "avg": -29.33,
     "min": -29.58,
     "los": false
    },
    {
     "h": -16,
     "avg": -29.33,
     "min": -29.58,
     "los": false
    },
    {
     "h": -15,
     "avg": -29.45,
     "min": -29.58,
     "los": false
    },
    {
     "h": -14,
     "avg": -29.2,
     "min": -29.2,
     "los": false
    },
    {
     "h": -13,
     "avg": -29.59,
     "min": -30.0,
     "los": false
    },
    {
     "h": -12,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": -11,
     "avg": -29.86,
     "min": -30.0,
     "los": false
    },
    {
     "h": -10,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -9,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -8,
     "avg": -29.86,
     "min": -30.0,
     "los": false
    },
    {
     "h": -7,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -6,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -5,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": -4,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": -3,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": -2,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": -1,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": 0,
     "avg": -29.58,
     "min": -29.58,
     "los": true
    },
    {
     "h": 1,
     "avg": -29.58,
     "min": -29.58,
     "los": false
    },
    {
     "h": 2,
     "avg": -29.72,
     "min": -30.0,
     "los": false
    },
    {
     "h": 3,
     "avg": -29.86,
     "min": -30.0,
     "los": false
    }
   ]
  },
  {
   "onu": "ONU-0396",
   "tipo": "subita",
   "pontos": [
    {
     "h": -40,
     "avg": -18.15,
     "min": -18.21,
     "los": false
    },
    {
     "h": -39,
     "avg": -18.04,
     "min": -18.06,
     "los": false
    },
    {
     "h": -38,
     "avg": -18.04,
     "min": -18.06,
     "los": false
    },
    {
     "h": -37,
     "avg": -18.04,
     "min": -18.23,
     "los": false
    },
    {
     "h": -36,
     "avg": -18.21,
     "min": -18.23,
     "los": false
    },
    {
     "h": -35,
     "avg": -18.19,
     "min": -18.21,
     "los": true
    },
    {
     "h": -34,
     "avg": -18.19,
     "min": -18.23,
     "los": false
    },
    {
     "h": -33,
     "avg": -18.14,
     "min": -18.21,
     "los": false
    },
    {
     "h": -32,
     "avg": -18.2,
     "min": -18.23,
     "los": false
    },
    {
     "h": -31,
     "avg": -18.5,
     "min": -18.63,
     "los": false
    },
    {
     "h": -30,
     "avg": -18.58,
     "min": -18.63,
     "los": false
    },
    {
     "h": -29,
     "avg": -18.7,
     "min": -18.76,
     "los": false
    },
    {
     "h": -28,
     "avg": -18.83,
     "min": -18.89,
     "los": false
    },
    {
     "h": -27,
     "avg": -18.9,
     "min": -18.99,
     "los": false
    },
    {
     "h": -26,
     "avg": -18.78,
     "min": -18.82,
     "los": false
    },
    {
     "h": -25,
     "avg": -18.75,
     "min": -18.76,
     "los": false
    },
    {
     "h": -24,
     "avg": -18.65,
     "min": -18.69,
     "los": false
    },
    {
     "h": -23,
     "avg": -18.56,
     "min": -18.69,
     "los": false
    },
    {
     "h": -22,
     "avg": -18.46,
     "min": -18.6,
     "los": false
    },
    {
     "h": -21,
     "avg": -18.46,
     "min": -18.53,
     "los": false
    },
    {
     "h": -20,
     "avg": -18.38,
     "min": -18.41,
     "los": false
    },
    {
     "h": -19,
     "avg": -18.43,
     "min": -18.47,
     "los": false
    },
    {
     "h": -18,
     "avg": -18.31,
     "min": -18.32,
     "los": false
    },
    {
     "h": -17,
     "avg": -18.24,
     "min": -18.26,
     "los": false
    },
    {
     "h": -16,
     "avg": -18.23,
     "min": -18.26,
     "los": false
    },
    {
     "h": -15,
     "avg": -18.24,
     "min": -18.29,
     "los": false
    },
    {
     "h": -14,
     "avg": -18.22,
     "min": -18.26,
     "los": false
    },
    {
     "h": -13,
     "avg": -18.12,
     "min": -18.18,
     "los": false
    },
    {
     "h": -12,
     "avg": -18.07,
     "min": -18.09,
     "los": false
    },
    {
     "h": -11,
     "avg": -18.03,
     "min": -18.06,
     "los": false
    },
    {
     "h": -10,
     "avg": -18.01,
     "min": -18.06,
     "los": false
    },
    {
     "h": -9,
     "avg": -18.12,
     "min": -18.21,
     "los": false
    },
    {
     "h": -8,
     "avg": -18.24,
     "min": -18.32,
     "los": false
    },
    {
     "h": -7,
     "avg": -18.36,
     "min": -18.47,
     "los": false
    },
    {
     "h": -6,
     "avg": -18.54,
     "min": -18.63,
     "los": false
    },
    {
     "h": -5,
     "avg": -18.7,
     "min": -18.76,
     "los": false
    },
    {
     "h": -4,
     "avg": -18.78,
     "min": -18.86,
     "los": false
    },
    {
     "h": -3,
     "avg": -18.71,
     "min": -18.76,
     "los": false
    },
    {
     "h": -2,
     "avg": -18.7,
     "min": -18.76,
     "los": false
    },
    {
     "h": -1,
     "avg": -18.78,
     "min": -18.86,
     "los": false
    },
    {
     "h": 0,
     "avg": -18.68,
     "min": -18.72,
     "los": true
    },
    {
     "h": 1,
     "avg": -18.59,
     "min": -18.63,
     "los": false
    },
    {
     "h": 2,
     "avg": -18.55,
     "min": -18.72,
     "los": false
    },
    {
     "h": 3,
     "avg": -18.6,
     "min": -18.63,
     "los": false
    }
   ]
  }
 ]
};
