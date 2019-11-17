import React, { Component } from "react"
import Layout from "../components/Layout"
import Styledhero from "../components/Styledhero"
import { graphql } from "gatsby"
import Title from "../components/StyledTitle"
import Styles from "../css/about.module.css"
import Abouts from "../components/About/abouts"
import Homeabout from "../components/Home/About"
import Styles2 from "../css/single-blog.module.css"
import Album from "../components/album"
import styles from "../css/single-blog.module.css"
import ImageGallery from "react-image-gallery"

const satta = [
  {
    original:
      "https://lh3.googleusercontent.com/h5HHJsv2P30xxyzPz4Jrqdmw8QmH3zKuX1BtZcw_jpDt4izG2lYxAC6BMbV_de8YIydlsd0Fwg9yF5RjjaUZBnlAANDcg5eS9dt4q3J__-4lIPulNsAUxWhwcGLsKrPG2jnhhqGsCtClR9F9mg_MIpeDac8NihHMmKkMXQGkwyKQp0mVj2TXE6YMpzXn6Mjmvf74WX9oCPTgr3Qn8N-OPpUU8pwInD7MMNbJBU7RULOjfumhQDGssAKGcYPRFpMRzwUIb0dzMcB_Bfz8Z_Fp1VSkx63x8IZi2JuQ0eTxX0swLo0PV6x8W4CFar4R7uFDGi24q_DA-7Zc3vpRo-K842spqzzushGgddJm7vX2_Nct-RnUJb0TU5KmwQtVQLgFkPEG5lj8itFMjwMEtv8N_HguhPCXGwW7tDUPqidN4dmoIZHQ60OT6ETcVjWgzoX-QpwJWVtzotonJazpvGC8pYDlNczgxAx-mL_l9RUEATYBV2EhequuDPYV5ibpxaEOAKjpA1BaQVbkaJrbDWVT5hpehqEUOSeLNZimyVHKBQQkTJfXmp_U3qKIZyxLsl7ZrP7p-p5yHg2lOJztjCJOpPyJoClnNnFvgdqdzT4KUkNPei2VbnTDuOQsDnrIpBSL4Gdmf6GIBYMB6kljCkUjz5ZczdxqrbQs1Q69iuX3lrHOatANYeGZjhDaRvkUYiabgYAlEmHPDAs-N-bEVP26JvFAwFrccOy4O9T0F-UesTu5Nmw=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/gI0eGkK5wZ2mhHbft14PRcSL26rPm5tgCZC_6MztmD8KSOwcwyqcTp6Ud1G8vLTWZArtOIHzVcwuDthXVPw1kUdQamq5hcNZ_8VbnyZ84zp2AiO1ZXEPnCmO-Dx85I0S-CqqS23qH1uPSiyp7apbJusHkjy_ZeLtV1R_bSukiePMNfgALnkpJplMrd5z-X6MaeatV1_03KGAWpFTgucUYbTnSEKAKCzotgnq28rsBhNLPydJJYLPnwUVcYPyDTTTZUXAopzCOmhtKO91PAroJ9eMTG1ImYkP5OeImVHOsU8ysqvVNz2BkwmOb5ZF7NaDJU5VTg28b4ElaDC6HUlMwiX6pyfO5IdUAG566lllvBvWopju5CREjQoVel9OsMX8fSOQvm2FfrFneqoL4mKuu1l8jEB1enqxXkL42qlk89hD_gU8UG_-h9J1-AaW9OYMZzVMpAfCeR4SOne41xpYNyHaErIbFs-UinKvXIvIHed_7xCL6kECNDrq2RMaiWcFxGholg-my8Z7F41NasftzYpHoOAVyyv30qXBTIW1eNCTvrdGdJMwgyGL8SFoE9eBa_9A5ln9VmZXsV4ERW8r-KXdzGwQsTF4rqLpDrhMUH-LFiavS9Y4_VUICqyPEEE6AWOOEMzhMaCrrs-Huc9gTFDzjQjPMUwhq6SOzd8msetIJlYEdOzSS4dZ03b0XT1IuGGOBqZoFKndFw_75aO-DA-_IW3GE01y4ioZ01XFpbOAHe0=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/dwAcaseFN8X2bYiBrkXNHgEhYy2n2diO1R1sYbKxHkJa6BJCeeepKjvyP7nrR809cgA6BQnqk-ha4-2-Ug_v3_LhIu2eFv01Dpe9CgCFLSV71IqUnYlmbstzp4ey6B4_zmpFtzif0Jqpah1Wg0EA2m8oAOgm5TawNEi4mqoNdMIBrTQDb2peCtRtKd2rcU7vn7qxha7gJGQqQSgqIBal9uD1NU9XC12RzV5_zLZaWXJCksJ5G25Rfg9tLP1esufuuldt-1VSgI75SR3ag_FNJ63fiMXfi7bD86rIwAphWKF1TGahQ0SOD4EtcUP5EaRJe-w_TcFEotuSRcjNUqLfGqQR-oAwmlaO2tl-rf5-Ru1YM5NcdLHU33izKel20pPCM_zW0ILgl2P8Zn0l7X7QC4SZB9yDUT3tQLxUPJ8y8_XlhuT7WlygqZOS5aBuw5RGyFrSHPpeYeJskeHVKsiN6UU0Cj-Lj2gk0Wy0j1g9h-q5jNL1hSRAfHwUvRxkNaWv_9gALjKJMroe0agAzmy2xVQvu_xsUx0rgxXnaeL1445CwIo5J0uJ8tl7fym103am-WfHlf8AuH6VdDdsfeDKmG4o_G95tGAutKMLuU7903taG8HpIT_A6n_4cIAA3aJ3nNWHO0I_Ch9F5JspQfvQBMMLsQV0n5EYG9oTYaYXmX1Mja6_l5r3vp0CicQ35n9Dijz0mLbEkZYdm9YIZZIzSO5XXRhXIjleHMgHPdiXhI9QU7k=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/1cLtTZZMcyvv8_3o00CC5Y6koVUb8rcazJeN9sN_p7-7Tg0h9N56ccyQK856V4zsKfAhGkByiqXVen-4eo6leXZ57LBEERSrYuWD29gdbMIFuMGOmcI4jzA3MbQKf8IX7iWB5bRCMjrBLyAvgDzvxJwYHPp98FHZWLLEkUWetjbEbbe01WEvz001v0OW_p96zMQq_Jyx5ofy1KG5S6FAhx62jEDo5x7FEI-p_QurxV-6hzqLV-Ppvlily3yiZOo9ccSKs5SD1aR4oZIi9HsuQM-UgXojkp5_09pw1YDAbOpKcB66jfln7FcMOVPuRWfGn1JSXvewMeqoEqK15XbYZozgA--OmNxxDWw5C2m6eg5W50xoR-JHddt6ohOd54u7l3Ja8S8jt3CtbtqJuRj_pFcMTe5E9Tm7KzwBxe5ubG_awpg8PuT8hGT-rFx6mdrNv6h7HoXm6qQrr_ZjmnrZh5zQXP2GQf4Q7cLxtIW7oJ67fS-rP1q8kKMNCRPHRhxMJKEjt04CoCXTUz6lDujEVd8FrNU3bK_0N1Ua2gVku0HoiVwKQm8CmDShLNAc3Td7rtGD9UrWWlHj8NvBsUYjk5vTrmKNxJYnskXBFnCAE2mFkHwJBWOQpl4sdstc7RqXyaWlzXTijrDC0UIoe-XdqidgNdWcgVGQ_Mf0h1fkm5sZM4V4WPW9Ehn4oXsLTOhpYyvzjeRTQQWatKhmwDykFVru8u_zrBy09918cpOrBikZguY=w1280-h853-no",
  },
]

const uthan3 = [
  {
    original:
      "https://lh3.googleusercontent.com/143BJ27lB1RCS1CQbLrLiYmnCfGAk4qeF6orHqmhFPdGN2a99pdS_gJe_xadP7QtN5NTDFcR62trazRXf9kuYdff_ScYDkCBBpd79TWROFseXeRYINU-G3eW7GkJK6DwCwMP6zYmHiNlICUC3OlLDOBS-TcSXR3bSXbjiwIN8e3p9goIeKMftI_NUSnvEbUSbrIxKoitKgvZRztFdsNegYBc7yeSgLjGgisXwX7HYWrfD6h4JfM5w_KPXC4rAj72tb0NB20YaVoDypCNpSWCisEz9FUtvW0m2rmxv-i49vEUh7Dk3f8h0UKJzPO63HigMlRtnY91Ol2pKNt2J4QKY2Lq8usme1OvLyAtD3yP7moXJhII6DV4AQd7ELc4-uUaQ6g1Ygip5GlHT1yLXr3zH3T_bnqeLYp49xlElh2qcet_UC-exGT3Ke4peKmIzyR7kWzw2joMQrlGEkAQV9pIJGsfcx2D-WeOuovv2kNy30eFkaco2E9SXXY8sNO-MZ7AV43ZJJWyiDYNByMpFUgyL5OlHOIEvPGtHSJLkmTb-mPACPjx1CQfG7Vl2TFEW2E_Vu6SHO9Te8t6dVpt9lpGTmPAlD-pZoadYp6h_-O__B8QV9syOf20HFe-Uw2h-VTZUU0CjyCq81t5HsbCgD10bxfueMJWk8G6XMmpraPANZY7EEnJIs7oSDIeA-SvOkmdM631joMQbGi2Bedw-syB6-Eko-9vm-LYBNwTW-gVe45ESJA=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/L09bdwdDRDBo6RWappr6CZ6CuAfIAimLEtia_K4N-lOzkkJGlZg18AG5SSEIxDtIRBFq9rvERfxAy0yuV_ahUhHHLsQZMtu7hkqiX-DhStz7aKL1jrQ8gU0f7n-KF2M1qiJ3PyQeLkHPxZHyULMXN8yNnYSVmSBcRMkgGDG5CRHD2CgC-7ZTeIpKOdqLM9DlgeUragDMAsq1CCuy9_7gZwv-d5qLAYoBj7BMIA9AB8m8WyYDuCJTD3O7LIqm9Qd92rPGeKfxfhXaCbB1nEstEJG6rkj5dHrEoxe05T9dPI6yQ4UloOXxculpbgay_UAcFqhQpY5t0GE_toS0NkOGZdN9vcFzju0scH4tLmA6B8-_FGp5hZ9FqnvdfvWTZcP7okAdaoEI6E4SofZptc-Fr2IGpLC1qvAp9nxBUD0bwp5z0jI4iwg7J8nvjVuI88tdJTOgqZJbLu0vBTkAiV1UZrsrFWIq6roBPH78iJfQMEgdGMQgFjDhoIraW0wSJRyjhnFmpd4kWqHOaWsI5p2zpJhIGfJPTCJwvjp7RJAwirW1nfln3f8hasjztD6CHE__M9tZLK11wz90rJIqpEY9mqO3Z3M9XZ4uce_WvNEES0PiwiOodQNxv65gUImYbqLtuusVmtkh8gqTmfgQ-emcgZbjxEvQ9-9zemn3vO-E42xi9ro49wzKy-4Xe5kQDeOHY9QGb_aw8cQlWFuWXkHp1GktUX2nmrtwGmcXaCOtERtKMHs=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/oLtYNhT_A9eIZnnLTegy8lf1fS-OCdhJdNKimTpAxuBhl_BGwXrqsvYJPErtFyks3gfjLu9rBwuCOiLaXbNs7ngmIp0obcF17n2qEGfd1cJJtTPuJy4gsTf26PP_u5Asr5YLfDTS-UEbOBOO4ZwhBiaE_dPMpcmbf3i-WHbqpq1epLesp0QODuQO0TLpeBZVamUs-XoD6PVjGBgtrDnDfaV9UHR6z6cI0Dy1iWdEvgC6xyqTapegNXCC7jlXLAA1co-cpteyBhudujg1cOQ9CGS1omVsL99zR4A-m_tIu_NMtvxXqpgR232Ci7jBrVbKb024Jb0ts2Bzu65laBrq7E21LaXbkSFd_fdvPVh_42MxurHlpiUWGAABuI9ZWv_-ZNOb0TGWssQ4PDIbdC6a1C66m_yixjWhkRp-JzMSQ7K3gbC9RxNBshhfHKtHslIc4lXz7oE31jBRmnaoLY8EaSub7WQ3pMcpWjkA_BEic0a5Pr-VSqGk4yvwAHViAAR-t59JWb5VQ6g5t0FXWdoWRkiXu4ktE28DKd8N28GIfsQyEv9f5vPD6CmU9dN6x1jt9wTX1banPVgGpTPy1YrXdc2iZhIXRaevbUIc3YSu-aSGRHEMkjG96hUfONrxMYo0QuWNHAgUXmAUAcEMXzXZIbGxDgMN0LnHg7kLGakDyrK1bPM7GggfKRqwKj_izEKUqcfispN6atQZooTxKoVT9uLxhMU0QE51D0-U1MBIozRZncg=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/_Uew_UelRstiEJR0rWiPtWu-zo1L7Cc5ZjR-2Q83mglKsiOHKutcuselgmP8a2KLrzPFSFQMHKrwa6O5cTyZBp1c5mlRQNHScnosCFWsg1d8QE7o138CseydNEc3EUCX82hcOzGF2FpxcOEjWythew0qUi_ymTx503WKzcLC6XK6akehMIkW7h8diLRpsDvzd1V_qGLgZIzL1tiAB3OZ80_kgQ7MRivkEXF3q1Y68o4fvcIFt9OF9Zh527nTciC8VA4Y2kZ0FqzO4cL524UmAweFpuqfA7p8w9Yja2ynL-kE7KDYnzkrpBcBRutl9aSqdEvN5LS6v6lDtGdtPrk5-lN7uhKN6e3Lk28C6h1No-AMXMTsT541UGTNQAv8cSM-HOHtHED3F6V2MRv9Cbg0NdOWpKuADRfHSyW1JugcNcRmgAMNq7U2nUHRdblxTGWwdBV81qZke_OaVEbFJoM8pgssPD5uhG3CsTHZG6miRlVUP6KKP8KSIhQ0bt7RmPXvvyq0TDzDEbA_DiKpQLoKv43cH3_Ggs_tIoXC84eFlwJ2ZoULp6i69lZBvfseMksheeoJBR6r-tg_OJLphD81PP7uZvucZI__8GYzvoh6nBkjZ0Yr8y0s8PKjXnNjgqfgM9YnCqRI_zSRD499pAAM6bLiw-Vc9AoV06kFHlIRdmPftRZd-ifV5AmOHhitZ4_dfYW3xq7T4gj01PH8HYSWwAz5wySPNTOFT9oPewlask7cnAI=w1280-h853-no",
  },
]

const uthan4 = [
  {
    original:
      "https://lh3.googleusercontent.com/wb4HNDkpOBZO-XPkXsaZyVrXz5EU0YF3BxUWC_Gok7L9kFGj5uxRAzGsHIv_sDNLQK1wpaAPzpkRrOMci-SPAUXsYSawkj_bggMKAXmAc8eqoU25RhLLRvnRrYvDHow0Hqa1qV7D7dadFBJte1cWGvD2w6NgyAA2eD8Q_mdqfMJRBJX8IIUsh880eHHE4Fzd-DohV2dASU8QXzj8tdxcW1MUXOBgmFReaU-Dv6y3mrrtVdWY4UcRzIoBXIZqliUAnMSt7b0V1xSpNkHPCOq2BF7zILHEWU1mkvWCeP3Z1Vn7awwDCslHr_v5ub4YKDOLBMyEPHU39Jkmo1AORXn36vQwd-0Yv8WXs0KZJKXy-uzljo1lGqkKicwksB8fZKqmXZm9Yq0axMVHX2UBNGToeUIhavodUIOLhzWJKHlSje_K4203drTnjPOozA8aUQciIfqgKAfN9EoOoCyi2hxvJk4jKSADSP_nm6PieDBILCdD8wpZN87NzuG8UMzH5Akn2dD_cFxyhCILaCf1nx1obyM0N0W-a-pXsRTbjqdemSozRYLowcGvnlyHvku5mNxqu_jLVsZ_fUZMlqY4TTbCx24Azuzfp0Alkq5SelYxgxmQ74wIrzORWEibSyfJnCroCfEHPRPr2aTs4EKVkFi7RPf80Ts1nicn2VIhhW2nQtnxjgfPm1Le5ViAli5PgNQc21sO6vNZel8rMY9Ap7bb5kJ_iPe-kjpUzji9Dd6SjqNJfkc=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/-N5nNiS0PZ71JW2kNNUXFAx-r_cKAkL3VhZu87sPNrgrAtHk0o13Xa5w92pm6GXx8aS0zMAwr78n4KsNIFIrMPp-Z43IAnvo2zzeXLAjAlQezdQ0gp9rTDs7rO13vl2MM1xYJUsMIwoZT-8nXE7Qp7hXGb-c5brT4Te3tvqDMdM9DAXehk09fjfLUTK45hCX1-ZiFZl8CpW2ukXjOATfXFvAJZGZJsqTbDy2wUWg0mzcsZxypkuXdrEGENvVDITBiFVZ0GI6ot0wxVxEi4LKLFtdSQ3uIcG_0fIavPBqp3BG2PylTUhBd62s-LVlkarb5w-Yt1G_agmfLlipC36llWXIF1ooVFBV43AeZ0qPnjQLFY6zoveeXy2aL7cB9L-oArIUr_icR3zQRCni52uBKPiHvG95_ODYommWOQiJAWOmbvJP7IJCnVaoZwnMOn6p-Dwkca9YMvzdpW9ezo-9fxOOwzIv7ih_V2ZcTwyqKvawgu_5Haa2UnCQqAk0TO7vtc5O4d4P2hYhxeVsw8EWYNeJFlRFkK1Xn6-QZPprGis6QsgrDvtsqc4VZj_6bshM29yBPWQx8C-zOwdXGdCZUNqrOW5FN219M_Zax6kzamsMcRbb_RrUS3E0vaS5ns-s-xqkBUn5DX-1hrzVW6d10pG_XOJzVfxsi2xYRs_GP2R6fmpuOjWSSwjSLG4cPeULhJoO8qdwWn9dl-C4uB9HkgXwblzK1hupI_1CkTw68-P7tXc=w640-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/qwprzzFcv_OTlAQKz5sBOebppYEWuNw5_L59I8lGvcGcNn3PK-xUMdfrwwvKqrnmNStji-PX5bvm9a5CByepPeK10T9toBBfe9zJQJCUA1uNLiakhiif8IiSlkgflJT-uh-8GEAvFgYeY2uFJNXtyIJ5MA2OWodZ7LZO1ahs_2yjT2Q7gy9E2Bfj6Lt0CesymFhucTvlhgjWbsyqMdOmHGjVmc2iGTNXUBV-cYX7cfVO-HlW_TTjMHHmUjkZWHcB0i050V3jrThkt3SzUCaN2Yxsxboiyrjf6t2jVt8ksbN3IOGokCWJ5vsqKfGhNtselatvE4HhW0ZlcLNmppEuDquyN5kAwiYhV_hT-Jqcy83qcOJR37lGxRQ9fXCUOp-00PH-pI2DAqZMuUAuAWaaBc7HxFrJAz2bc6XgHLnDNjx5lniw4sIDQUrDbFdT5pQ5MC-LMBY6ToZe818oeLfM8lVPVLP6LJPfMt-GEGmkATETzOzD_XWePbRXzFWchZkAZAhd0S5d00o9C0BpEIyc_GVg-S-iwO-khyNDVswiCCtKYRfFjljGF5IvvsAZ3fbMM3ZjaJMN1Yog2Gk0z4i5VND5M1t7RMcpQEXpQ6P0PstZax0CUogxdxuE-W1vpCw-eHB7oZEJu8EHxGNZ-9P0Wj42reDpUAmafayUhgaIy_T0WP7tQIK9g3BV3Bf2F6jDapzm5ujG6uwP6MLunZ9c1iKK91a_1g1AQJ1gIr_Sty8DxlQ=w1280-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/BxelsKL2YGJz9K2IGeOeRZFvXmrC6jW8eVm8dZDgp474hUBV9RA4vWDmUpWhFNCH5kuXw4B-fr6o_NcTDLd_vQLHzH_he4x_Hpb8e9lNsTDtML6OVXxJH26bZ3VJB6YFWKj8fR9Z-qzv7_o1DAm4rjAWm_ORki6yYpJeyjbqUlOZvRpidS-IUdH8oyK4BqmQCRt6VsYXzUX0F_D3z6dK_Gna7w5lPpcKN8KVSUz_ocurybhh0JnFSwy2_-v_HHBRHrG1SJnGuLwY0yPxTBTyRpid2UHxHZW4HNIkuo1Gu9cH831vRlva1sDnkjWiGgsa2WYfRV0wQwnpAjDtEJIZcq9UdKsWho29oyYUwvq0hqimUv5FfKOXxQ5PSRmHf4DudawFU1UC8IQXz0tMzsrdfpxX6Q2PngV4IKloExmAdTo8uYZtxr3C3BJhxNc493Nd5Kreom-CADyzhcliQOk-XPVHViIVlSQO6BESd-QAP-qXZEotDklegiRN9PsSJTNK-cgFJWE-gS4KFe88fgoUJHM0LIReJp08_lWYr7R_nLHNSJqMZz6W718bt10ahrArjtU8p7NiDm4tdzgjhmRpepySiJpjOu2oZfTnYIWrERocJIlNoiXGaEU8qldNACm0_CA7xZzlMTk3YPZDtp5Fubzp_mvzIVco4OjupUodHMcfNYwRQSP2zfz_7F4fDnVaWC7ubQLlB0_r1URUEzbsPwYauUnxcCIbxu8yX53RxyPI3r8=w1152-h864-no",
  },
]
const uthan = ({ data }) => {
  return (
    <Layout>
      <section className={Styles.about}>
        <Title title="about" subtitle="Uthan Youth Parliament" />
        <div className={Styles2.center}>
          <article className={Styles2.article}>
            <p>
              Uthan Youth Parliament is an international level youth parliament
              to create awareness among the youth about the working of Indian
              parliament, to inculcate the habit of public speaking and to stand
              up for what is correct. An initiative taken by Unnati, Uthan aims
              at creating awareness on the issues of national and international
              importance and familiarize students on policy making, political
              science and governmental policies. Uthan has successfully
              organised its three blockbuster editions with a participation of
              around 1500 debaters from various schools and universities giving
              their valuable inputs for bringing a change in the the society and
              now looks forward to the fourth edition in November.
            </p>
            <p>
              Uthan is a platform where a person can get all that his
              inquisitive soul craves for by providing them with a platform to
              put their views in the heat of debate. It is an exciting and
              unique platform for debaters, round the corner. Its fundamental
              purpose is to facilitate thought and opinion exchange in addition
              to its primary goal of empowering the youth. Uthan comes with a
              bundle of surprises for its debaters such as badges, goodies, cash
              prizes, etc. Prominent personalities, like Mrs Shiela Dixit, Mr.
              Oscar Fernandez (MP, Rajya Sabha), Mr. Salman Khurshid, Ms.
              Sharmistha Mukherjee and various Civil Services officers have been
              a part of Uthan Youth Parliament as Chief Guests.
            </p>
            <p>
              Team Uthan is all set for its next blockbuster, Uthan Edition 5 in
              2020. Register down below to be a part of Uthan legacy.
            </p>
            <a href="https://docs.google.com/forms/d/1TjKSk-y-TwaAlfSKAD94566wzlEh2oGQIxVBLqml_8o/edit">
              Organizing Committee Applications link
            </a>{" "}
            <br />
            <a href="https://www.facebook.com/uthanyouthparliament/">
              Find us on facebook
            </a>
          </article>
        </div>
      </section>
      <Title title="Uthan Youth Parliament" subtitle="events" />

      <section className={Styles.about} style={{ marginTop: -30 }}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={satta}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Satta: The Power of Words</h5>
            <p>
              {" "}
              Edition 2 of Uthan Youth Parliament, Satta: The Power Of Words, a
              legacy of Uthan Youth Parliament on 28th and 29th July, 2018 was
              bigger and better. With 8 different Committees and exciting
              agendas, the event was filled with 550 delegates from all across
              the country discussing on national and international issues. Mr
              Salman Khurshid graced the event with his presence and remarkable
              Words. He interacted with the students, heard their problems and
              came out on conclusions.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about} style={{ marginTop: -30 }}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={uthan3}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Uthan Youth Parliament Edition 3</h5>
            <p>
              {" "}
              After the two successful event, the third Edition of Uthan Youth
              Parliament connected more and more people towards the cause of
              nation. The show stopper, Ms. Sheila Dikshit (Ex CM, Delhi)
              interacted with delegates, shared her life experiences and guided
              the youth towards a better road. Many grievances and problems of
              young India was solved during the interactive session. Other
              guests included Ms. Kiran Walia, Ms Sharmistha Mukherjee, IRS
              Vinod Kumar Meena, Mr. Mudit Agarwal.
            </p>
          </article>
        </div>
      </section>

      <section className={Styles.about} style={{ marginTop: -30 }}>
        <div className={Styles.aboutCenter}>
          <article className={Styles.aboutImg}>
            <div className={Styles.imgContainer}>
              <ImageGallery
                items={uthan4}
                showPlayButton={false}
                showFullscreenButton={false}
                showIndex={false}
                infinite={false}
              />
            </div>
          </article>
          <article className={Styles.aboutInfo}>
            <h5>Uthan Youth Parliament Edition 4</h5>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "abbout.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default uthan
