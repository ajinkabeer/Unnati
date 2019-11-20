import React from "react"
import styles from "../../css/single-blog.module.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageGallery from "react-image-gallery"
import Styles from "../../css/about.module.css"

const parliamentaryDebate = [
  {
    original:
      "https://lh3.googleusercontent.com/9uT1bOo-ybgXSF2SmwxhtfYg4tt6HT1TSuAdDuocWe4ij2zHUcikENoQIdk6ZLwma8enOAGzdxShuzaoLbhcnTPln4wzOGH7TpZb_oyZ_RYJ64uz3ledGW8ztOWAitFr2C7NKECMpHPDcZcZNsAor3aMSkdBYm_qlHAKcDx41EKrGSV8290BuX7TLweh2uZTaU3Wksegan2x57l7Q_cXY1-it-hrMV9KJ1Qiu5RRa2HOiCrOH0cMOJl7wzb9WwAkfdER0mBCJVgk7-A1vzNKXPSEOb4FCEsuLByUGdXTcDuz1xB2MorBbmdRFR0kNs5o5rrBoBVyqg1lI-HNCxxBqPY6aV3pSVcxZzW7HyTECrJVDj3ow8kNUzgfMgtUyIul47LkVdbp_uu1ANx1jDBYrfOFjPGSD9bB2DScwrduU0GlifPUy3_LkExx1P7EqD9rCcxWyLa3e9pcDjiqfnVKRKnRCFjTqdY0ZBIg-WXuKRwndiGCatNxTBFn5jAZECOIsLmrdnNuszwMoZCpIjg3F0p-0x82EAYtzf2vRkkmIZ1eM8oQghl7HF9iwcUqMBixkyeApsLVkZxVsPnK-D3Y7k7KzmbRfYxzfBr4St5NbAwPi-YClhyELkr8xu13pxsgkoPDpKdkzkHqGvIIaaBkaWtapsKhrURFVhvXbTjxZCu2ekEqI-a5pYoU61jrMGADNafoaYbxI5msfv7B1L5UwGiHJ89ChWBhVCvqjrHvqY8Ccg=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/OXoFtnKMQHRJIBHBfXqVxR-X-E4rOKnxrrxZfR-H-9C1qKisgzaXpFI-yrE-vDcZuAS8HPYFwo21xL2Z__kmiK5_HgF_PmD8yh6Br0UeWe67eO6gC94pbY-odnVkYAZyfm1MpcntNEPegU0RkCjNQYBzx3yIu_rYA3egXqfruGVb_BFH9m9hu8mEB1nrAEzMl_kbU-n7tB_cx946tiiZ6ynhEP5LZZZNmQ63ebZhoDYkmjYdVIT13dTfPKg2DaaE5mfnXHJUfjNbi50t2EX5Ev6HDf0ujaZuj9_ZSo3ViDlHiLl8icUZ1gXMobZg9nrC3yRw9QKGXqHpt4pGuqxdLXTW9OXM11ekdkxFzYr1WLZ5VOnuOdbikTfm8AsIemc6xZZz9tjVn7dx1yCMIDL-zEO1HyAtyq_xM2uQks1owe3Zz6tRn6652knZtArAOv1ZKm5LuLaIlWckl7hHp1JknuBOlxwQ2TIR18ih80_r6UnXsONWwMhN74CRmXUYwSVooU0IOJoWPMITMWMASQhkkNO71Opxh7LZIZzg-Cz9mYCcapI2usnrI14DNcA3VPRsJNmyyaSeSGoOy2c2UYv2a_2rOF-Qp9chcNzHexPctGixnLm4P5qAGpkh1wX-jEvYkFpzmZrJqchGNZCIon8s3zeBde9TWGzoPFgPfx13r8YuzQUJpE9xcE4_4qRrS3huYk3eKrpVFgm1xjsVTrQ753jkTfMDhpjk_mZbYBmAArp7gg=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/vESkfl9mMxwzvhX8iVwEKEwrc_L3QUyEfRxji7P_FPBw6vk0ZZ2kZ2NY5H7UU4uZTQePH4WO3GrRJp8bpqDOqM6TDs06NuMBTZDFz2FnpA4S12H00qirEFidadJ91SqMOhCrORmqZcaKIZX07ACUJtDbcUARVNrS_vkfexrpBFhfhfcpXD1bXUx4k6dmFNtDMgD0HsAl5Vb21AJCLG9f3SiRFVqAaw_sDWfsjMu-IPRaQWFNhM-kuzl5D3AwcG-g-BCh2sqK9TVxwCyn4KhyICIfHe_p7yQulV_7SiJGLAsvqONFPkTt29uSTBfSVs0lqMZ_Z2zE_YZ8qAQCuA4GZYhe2uq1Z-aACgPCiyaMn3LuM5GouHZjuErvTWqM4vAt0MnIVNkwak34TaBZ62bCFde63qaK0RCdzJYZKzAlVU4GHOZKMFY12XpZtyAzWJ1cIWRIdwuEIdweH0QoWxSxCgw_uVn6Z06IL7s_5_jlNNxp3ipcqgE05DBnszX7GdVB32-b_hbv4PAdvnnRlcfxkIUhDg-XbwZTuTiaTnqtkWuFbQjDj7h9YMuwH60kKHMMLeqqo9Ttt0gQas2CFpm1WqL0Acnks_HAo6v_v4bBatRpVZhQkiZgfI2WO5oo-Aj24vjpS-EBlAvVX-F7fMflbjErznNUkp5j6oxujNCMgeXp2awg5KLso-K8LAyP1covYeWaUyNnacQzCLH7lhp_faWieX5v_FwR-Sqo6YhpK3ljpg=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/JzZiLDF-2UK42WYAmtIn9RKFT8A1JvxpclkXGKq7w9-DygG8LdgxWim2KCEVcjE17mTjY2wuXZKdk16cxG6gC3YZTIXvkwvWgx2cXptA-3szgHsJ5sylihzBSRzO0N28GY3Q9FcXi6okPTxvCYpJ3NoUGtxpt_9QExpT37Rv0Jo7Od2ORltBkVD0kVcU29oKgAmQrg4YFRW320vwfCQCJMU9tJ0q-JUdHsOsrueuhejQyrDw1B__td5DLeNn29yI55hGZm0aa3SHrnrEtQ4OcWwaCXTZK2yg7kUG3p9cOxOBjOe2w9ioI17Aw25p-7X7ZkiL_NCURoNIhGcDukhmQlKlUyxZzwLteamInEE377RlrUsGVC90zzmR0bpPP_QVC4P_Ynjd9LMj3Rxj7A9GU8eGnV01sgUnsZ5BDbbJ5OuA7Pd3qbXugCZVYEyUwiQK7qPhaUoP2FryTaLtWEFih8ZrJIAtTOYGzfNGngKFIVEeMIytzgEPl_xtl-p6ov9AaTd1OMC_tcamOyUmNe8mFpbatE5hpHKfoQk4-v7rKDWbmI-yHbjHQcOwGq9oxkoDNA8I-35VpDmhmtXsp-X44MXpjOatbxaSFwuMO6SbUgZmW5Rl-IBV4bFkZLLk6OZzHLIsD__P-tZq8_w_v4CL5cHv50Ayx0ks6D3lDLAHO66Uex0-8lyXuwfXTg6VyQ7BFUF_GC2o9y46Qcli1dtHCMQ4Xtc2n-9vtxZmmzfkq8Q9hA=w348-h260-no",
  },
]

const parliamentaryVisit = [
  {
    original:
      "https://lh3.googleusercontent.com/b-C_iiPwdMUttxei8iXOPD3pOyyV_i_sAtbcV_t8anoaUeGd_TOYuEavA0sxZTidhTxgAdews8EY2e4AGFrqP1H6f8XtXScM5fYzjwg3r27gcomlvW5DK_Y6-OPj58AD2wKCxjINDoFIMcr1voPlAsp66lDPXuJoiXAi1chz-UaaQhhXu9JIJD5K_MNjfD_xmzkv_aNy04wi3aVi45LZk_rkZLKWMp9Ygf9hczTsNLAc6rS0mvEJkOjY0A_neqb0lvFp1it8cp5LdPIBv9KKoUO_y2iiSw5FW6dF_kIfz7slz-58Bel_HBDq2IlCDY8vN5DO2GfY_NyLEk4Gf0zOXD5QD5lMTVFIRHDtU7Ls2U6TKhXs4Ko1RR3CmZ_ok2aOvnX4bKB8N_ml8Vim7AxtwmTwd7l6F-XBelAL1xs-vaRjPZ2V9ORyW-50WDwZbbn652l9RsB4ZyPBg92kOeoRK_apoKy4zF0KAz8V3VJWPuZjME7CEtMZXwB3zdeg63ZK8gDyZ5JRMm6L1s3bMBNiOf337gm0o6rJns07k3mLnidkyGucsvfF_VVJt6mD2k3HrryiciCfeh9neIfzwMMqA-q5Vsq6i4hDSt5QtIqrIJTQGcwtSPVKSYlR7bhFJPmGrntuAA7hhZpVcyYvzrNANoivdF5yYIQO5gQyIoV0__aT8HG2mYljnL_TUjv7FOpKbDKxUnuxldnCeoYdpcyaxpyLwcyHIjXQEMYgCO_DMHHcK8E=w847-h635-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/6vvCfVP2vXsi5dNcR0FtXWWW_X3-giC0tcm0LOWjlETLaNqSazE9gOzyJfx1M0MTRZhfFx1xuxclVQYi9nTVvJFNQ84kbTVWf3UQONcGDVAZ8kvXADqUGToYsMRT5YswtAXF2fcmOdZrM1_kc3Tpo_zE5u0i6iPnlzx8QEjqHsjlEHM4PTOzIK6Gv7TXR-89FrV7pxICBLfIfWNbH5Bua1m9yNhLPJZFCqI4AIvJ36iovPCAmsYUbogGuNDVq-SZNeSrwGSVdx8-yK-KQhWv2IBWapS1OV4G_-g5H2BudevRvwu3IJuDtsHl4NMZdd3TSmNhduC4qYaY1APleD-1qZxRJcDxEVRj8bL6y3rHcQaCndiwbdXnk5rK0xF_oVYhTIYAZ9FK27-mN7rdsUltIkf808mjwGuOtwmbCaKWpCDuOTvEkPlL6hihADzAXA2dW-XgBe3uqqatntPqqtZrj53qTCpYrM1qjh_8fxZ0gt7PRVxdfbAQAbXeBBFUhi9e5iCb0KWe36vIrslAdGXHowHolHirpOvQtk0xW2Lt2oKFawxeFFkj_TY54AuJhZV_QVl2qWi1T2ZoyPqVaHBssFr1O24_mY7BC3H1FkYADFINiCF11c-9ZpV_5Mcc9t2cksQt6J0IoRLLcG6c26nSV0z461mvpzg5UFg743zBoldq0VZjGjfQ7KoS4xDdZ84KcYUk804WDJQ9ES0I00_nj07zrEzpU0t9HoaDY7VAdewkRzA=w1280-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/sysAouUKeOZTskjzLXAmFiMKiRG-G3PPQAcmx0oXnPp2rh0PWVvj7AORRYPm2GyVg2ece-K7PAXsANGWj8qC9ZysRcQWMB7ljcVY1JIAv76oKT60acXEO64NDGlnt2rw9-CLqAdOrGSmukHAtZ5RNW17fzqBHIhADNOr_JrSr7b_tOUt6XHRiMSKCCUHnRfwH2C-zDQofF-wLKqXsrIOPFcADfBbQPiqjPEV4KMpOeLql3RX7S83QjVzm7c3-Y2FhkcmZTgFMIzgIjMDla8c7wzW30Nik0CV9fzG8D79zIabQoxC92SIEScU0bkUbhq01rQtPY0FbNwpYqCii2k66nd9Yp4KuWvW2TkUqo1-PKp77p90LxCNCnizl1ztHfN_LuvXsYuwTvXorqWzQg1Nuw5MraCIznwzf_YCmmvpugqYjibKjs7s85FFA5NzsUNh8G7IneY9yGNZHHWL3BudO9VScj42vKq-jvWH5FrCrswf-1phSpouUTiFMkbfd91LRP1mJv-455wiIM5_ymj-Kc1kBLCR12572OMwX2BXoALkr8ySGA3WLKRfDRJ0yug3KB71oNqYRSl9SP3y6ogfKvUeMWugrfAg6kpxRxd94UitC0NJ63Rulfk0eVFsnWczRJRWkI0_qOlgCIzE0MufZnANpjkEJVAPsYPFgxIDJsssJPGiKIEMYaYQ-eKh-P9Lm1pfwV5CdddXdMvrLyoPPT8tbiP6Iy9sF1F80Y-hYg73MKI=w848-h635-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/VUmswBuRWdrjx7kmVTo5m_ISHCZHI1GwW4-oFru2b0AjYsdPmhHLRhGh5wX1hRILbqeBMWmxDWHMDARBBJceHUknnmgbKshhVB1D3MB2pvJsAIYcOt225fr6uJxf3aqDN4DYiBfB2KFvr5jiohUzI4MnNYyeyOEIAF80CuADelfwQn_ClPrB4lLfGvNUjzvJMsUSv06ozbVQjPTHXO8S-Ltd41qLZ4AiBSAmDU05i3p-_P48mM519JKxOegM1wQQIj-kW0jXMU8LaiH87KZbvbXixoEM6p3UZmmLE74y8wd1K-MEFv0hvfAlimO_53Ox5mg-E9_Lr0CV9dNJylMyRiO7xWA0ims0dDWqvnv_L-g9qZCqcezaXpEVL3ItC8xS3Vd-uV6J4XzRvX_jlJqtUkkpezDGg8E8pvvVKcTHYshXzfzWI_WkSzy1R9aLNTda80KYwFsAaNeacG4wJtcrNLcS1L_t5NKg5kasGPEVdgSgOEnPtXLzNu3umxYrHqWVapI6QJMVDd5ubxLagOIuCnZ84eJ-PerYQlPdGndB3zArXgk_HAexxqUsvD4rJ76HB904jE-8-M4lhp_5XAUFWSSsCK_jcKW6M7lv_mY7ox0kMYMxlAhNrbOeGNeFtBMuBGfDiyZZOvBeUfBPtZ-i14wG741jC3d4W1pXGUFlz1NmlTVIuaVchiNVVX8JBlMdv9nSc5UAi6xwpXEdNrYRnjMFuTaihZt_EJZLrs41qVmPMwk=w848-h635-no",
  },
]

const interactiveSession = [
  {
    original:
      "https://lh3.googleusercontent.com/JTVf1yiMb63jaELuGcRq-aMYiLTa6l14L-FqfaZMKZfKX_dnTX1FhFQesmIH4t1Nxu4yYMEAW9KsVNFKiSAaAm3ImT7lsp4CcD8hJuwGWeP1zWuwIe5B_ki95Ajc8zTryddtsPCV0XsIzKdMits0cFy0yWQ2XIhqCAifNoJCEzQM0DmiWio5Qgsg8wTzdgvpclYKhFz40ml5eMvabTBFz_ispcftEe4m0g_WJ67LGHwMaVudQnMdxw3VR3T7XF5L8PZkopuYlBfWtbzga7U_tq3shE-JntIDjDfqCQRvnXuGRg10-Hv7faYutHTK9BKR_dBU5OXeLfx4sAbzA0dY8S91Ck-632qtvpVJ3h9gOiJ1Lm9f_gXrQhVbfu8OpnzrxMO0dUpaCU9lMPEgFD9LVTJs3Ej_FarMsRJgqF8BE3G9gYYJDliNdNeyWlQvFQ09pXP8DXcglX_7CljtX7U7DU2bkGOBsGb3B2SDJMyWJ393EanwIxsLCPGZYpXXUY6nXfIpzyArGrlJsJ6axJx-FeLFbZ6bQLTrJ7Tnexv8ZvK1ZzCsMTMfWnPu7ISEeLtf8ruLs9OpQJBejXWdf2KiyLePmxBQZrnOeusJ47jO56BOvfMCHfrdFqlQT-y_db8hw7pM_uF_hTpVZiA69cuI-T2jxTuEZwIRokcGWyfM2NdJtSgJfD_Uch6VKfLurUn7vaRONjlMnHLlM7Hx5msCigngz6walXDgWUrAU3YyYP-jcyI=w600-h800-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/CNNPyk1hSYcIlFn676l964eA5O7t_zWmTgMx51pDWSxIEhUarCPfVjKUeKnp2lACJFnb6O0nOskGDnAA3cOFJbAU1dqPBLAz1TxS78QxUif4Zx0LMX51BO7XfbLI1jozYZxddmre8tgHy8sI34cuor_WSgaKVhFerQlo35xcr7mMsYg2JM4dM5kmZL3WCfKrsd-3c4zX0eKHSRLVBHTbCP6ZRpSUOur2KCo-IUXqPhInARAxcozYaQU8--K_Bqotj-TClo1VLVqAxmk3J76A4HpaTZWmdaUoaukmIo8GgVVf-DjgvyICd5fPMs4ePuJ4Z92y9Oy9hIJ3z9rnCMDnCB4DxxX2RIFnXqTYAfjL0JpU65KLuCedbDcvR0H7KURT4W_pJzXPw_IPOOTdIg9MDEGL8N-HwfUsQuGJsLdg2UGFbYdW5Ct3DrtwAD0S94oujVz-_6u4kh-sjG0Ye9ZIjAFNwVzhCrqc1IxyeHJjKnDbXtkO56_doRyCJZA9URII1wGvt79JLB5d99-TlfIOpR8BsCX55Y5nk1-P3qzD4tTIVlH-QQfhgg12vq3DMBjKSCJeKZQitx3hx6UrTKAWQAnw14enmk41yBchpLLQTWzgHqwVIdNCpoxoJF69Exi7W-B9lDFp8cFwes5n2ETXS6MEuvuBhIVPTdNL96IRRl-NGmUltKOmh1GKrWfYxpZRo6DtljYIZ0zmy1b2HDk2X-ObOPK-7NNlZnPRTEFCzjHly0A=w449-h799-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/7GF82fIJ8ZrsQVmSMzUwC8BaeG_5RUIJGjRadliEjr5PrrWM5ktaFsjvt_UHRKY9252_aLEXdWY2eXnUqr4FP2np17OFEtaDJOrHEglnYCDRnqi6tqiSZwbIVE5bSRrfah1tIxv4cAqUPX_U4vXGRfcYCdEwEVxDSl1wCiI8TDH73H23yz5YNWz_kn6xgNPLJ28TdLzYhIFPoPT-_9JAhO-XMSVpL9-Ga19kTQ3HGF9WFw8N88iZ8P3g9VQJ_MI_aZydI6lFGBm9IqWbR9L3vzy15jwVhEz1tmzQ-KjKO9jdhG2x_voXa88X-2L0fjoAkOwljeVQjz5cSV5bNYKo-m_HsOX7_mFIQcL2snrEi6vvGFqTtTYM_zfn9b7dqsDIs01A_Ojl7dJIRdLWAkaMhrNpwdIDs5fvB8xQUMVuoKwWn3kC-V7tyjGkHgOe23H7UpIAwEAhgMIBqWRNE4UVlWZrkVGT0G0c8Gk0fHv9jKFcinoxhaXQ5eZKIkXKaV_g3FY32CekQI8P8HTZz_utwTJnsPL6-a-ZtM-hjj3SInt0P-0tgpRxpPb6vdw__hDmNbB8m4KZ6h0QFlciUearUdDGQe7r0TEqvIRpUgKgHsNUdHdwhmEumNC62sRDV0u7BYJ84N2piYF5fP2BbVN9YKURzzOjWiXyCdbOZjd2-tOv8hUJ45qoh5lwh7l1iHOblBt4QXMlyVbGSfpob5lW1S6k8qmkllwbjgw8BEf1qzCnP6Q=w378-h672-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/CrmqlQ7fkIGQBXb6uBRpMnE2yNxc22NO09TtauJQwvDS90-VleCMsO8EQ5t-bNDT5EvLEWKbLIcr0RTV4A4OzbXuKsuYRcof720TMQxGddN4WkTsqsvCn02_1W2qFrK2-yPq_tTgfZEbwl8XnKv86-G_G3a8QzmvZB4LFh-lCL-_sAJIg7oTJZq51G8gZa5CXG9Oo3ltttUg9wUMDMbyS3MHbsckifDpjzzOPKk0VOre7D2e0RnIvTbeKnHcW4pmq0VB-KxBOA9mhp1fDKYB41EkA2eqK8Xh-2uK7gdLrvsBqpf2IMiLIleXPunCqJktyE6V8b44cOdBR0XZnvm-Sf6AuIqkt0BFXrvdG2oFc8qdp0TK0oWEY42YIdIfXadGZmwOSVzO2KhXN55lzbXSZtvkNcnWVdTqxxnm9v0Ho2gW3cG5nfynPHN9fpKWCgV2_n2GtUXAk9gS7vG2H6MzOF8wu4b6rYxAxOqpiCMtpDMeqCYOJy4EGI39ZO6BVsCg2KY6aZ6YeB98bl1c-C5odg-QRb5xjLMWm6CruifnKEj9Q79OOyx4uESzY6QiHjYY5FMhP7UmaejJJPECBaEaWlSmNwaS87SEGb7KCwS_xuQ2_UKHOJpxPDzyPOBb2XnXUnSqTusSPl-CnJajas76GKdG3-LpF4TUMEhK45Cm8u0-XNBMISqtGlKu8dhc4xC7MAzWpNjDkl7z-vXbJrF-omkiES-dyS-lqlzo1x34dfYTQO0=w476-h635-no",
  },
]

const run = [
  {
    original:
      "https://lh3.googleusercontent.com/PRcKYY__aTr1-L_pd0DV-WnW2ILjGoUCseCwGqf0eE0w5S-PIZZ_wy25ZqKGizTm1SSRyX1VB6txQuqW5t-P4DR6-rVcvgSJGY5c7xjjOXMBSfiJz0mhTYvaGMrO1He2xnVOXbmaNgT2Fk62ytx7sZiQGl0nVdoPFD9HDKp00Rqin3TcOWOpy8wffVk-OWdTQLn-oVzeC6noLNEN_28U5JXoKenxe0fLmk-Vw3bK-6Q7dNHuhCKGdTWR2DFBIfmTnFEZFgeo5TiQwF-JMLqRI4IpHAcxFasta8AXf_wNNYExnGmsBQuyfevzFhszp166Oo6HRUlJ4MOlQWWyEQXhy1ZszbAuoM_xtozLgNFxBqnsjgD7GAu-wpW5WfzHBIJC_b4CbfnHY2Y4sr0ABW8ncodsk5ftz-zj6LyD_GCK-k-qC5sn9tBF05uLIM_B5_L9IaknzkPAVSohygLzHTj_6Xy8ON53ROttrh883kl-D4FCaMurZbfN-Y3EBCR2S5xN7iPBnPnvlR5qJKjBbeZKYNwclvlSEH0IQ4EhhGDc7fYdRymrPRDEqwcOmRw2IXzAErqi4GLqbtX-rAVeV-7ggM3stlGzjcge_Gtwf_vI4zTtESxr9g3fKLR3OlNvw47A3C4GPFUUINeEG9FTBBOrLZ494yB2u3qYj6TJp2pdnQaSKFHZzj1mv_VWp8fQEBHQaoib-PrzDc1CWrbrijwHliG9S-wWyrcD7roRX2SqoqEgACo=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/h239PNbOgi0eQrYqHPxwr09i8eZCWdTP_mcONv1rTxmLJ2FF3QNmcLnN3YpDwyIi5dGK76BzAR0OZY9qrYMf6EdJeG57JbbBdC90QE-2aOfXBtU-mdmCMIU1RkZB2NogBF7oRP2A470x3NfgpgwzRuNZ4s6Ng1CQIf2S5k3nWRh5vOKcD5yszavPq6Tx0z0ZtOrHw2QrfNoWvEsZCRYQrigD2xvILwyK4cFmnFl1vp95wKGzn29D7SRIe_47L6b3yAm0IeX_GuBhZXzA9y7abBS1JQoodRcUIQkgbqj11njhGIhBl-zb7EO6YfwwxXhFOIuqx1NyNineFuu1QWyEdeUQ8bL-pEsh0TukuSfgKS5SL7PMRb-jUDW0DxCa0MxHP_TvA77z8617etxUnD2iEcOX6D1ZtIAoRbycgvK1-26-ibGioCp7CHzeWQxtQ17u9SFDs93PC8AZ1niJAdl-cAa6RT_4-NtxjFDfi_Hp87AFpFTsXr2yYHFYlzzI4Jkp9gJDT-kslAuVu5itDWIYUJ-ndHMb3WGG3UU6oUeX0DUicUQ9kW4RGg3Z2MGDkjHKOF_x-krIurDBJVZ103j38IWDKSTRWjSH4Fp_0I1z8JLHDjGE8J7McqgsMKSl1Q5_GkmR5Y-nD7162OUmSYrfaBDvaYIElDbEAYybDAwCYuh2WUjQbAOhlfbSH1n47ChmWEf_VLiXU9pi1SlGDL1xdffjHHzgPFWy3KXg8gvJM1TPLbk=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/no0cLfaPmeswW_ZJXzcIsW4xCcHDqAk5NouolhBLi8v8dcPxYFYvQmlJBleVcIqvEEX4jA8WOQeWq0g35yBnY6kV_nnIatWGFxE0Q9kzELHJzBJ1StlSofj3DNWtpcN_unAXx1qTOxwXgpIuf2maH-7ZdHUWNYFg3XCqi40I_aTiI1ILgqbbjSzUJTENi3JwV12pYqXWOwiI_zj4NXy7z935n8rG7MZQYByvtgho9hvJDVLILlg9XDSy3__kSsxznnH6ZSTM81wml1M_nCXcQlBu26_MPPLh1nnHBdpGMeYNbPFn7u8sZ1z8TBTI8EorDbHA0G06RNqXSZ-2rHpCegFrh5xJO1vXklfzv7D7z1SP8lcncecz8QokJ-T4RqU1MA0sm6aE6ROnhkrFZZlXIE9mrZQ3rkDbEf8We6TxauZSgfkXmdQl8LZI8GX7vDKkXrJVoQoILpAPBcL9vE8_gsg-xCfUVuCR7fUma32gq48qSP2md1sqmv1CW-xUsRKbnkcSKcuRLZGlpzi2pu5TPGgEwv0bmtwmtDaqHntwyzVPrODP9JVMBknr4A_5NB_yHLQHxL539AZ2kGb01y-hyxAaQI4ELuc1dnPjCPZhZcLe5MX7Ub4GqZuOYI89xpjEmdbJcxoPx1YxxBJyI3qMZ3zoqyfqV3EdOq3HoMfQkMyZ9xlVOiheqxsM-L4l9YStCB8ZPi_rOpEJyQEZNEew7ma_uv9WFEOGu6nOlpu-ObpOAV0=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/qL-1UNY8ZJ2R6noA1Ipc7UH9cfbLxRMUvfi5OwQxaAzC9YRwA4msAEtG7ZYPFrdsZG4Tod1lDZQqvsL78IDc6rSZ8cfDqQydjpyl75V1AGgd2kSv7dxiY_mhHIyVyhWZh_PCW2dDeUgjQCtCWvOdMeke7wu_TqSz8fKf_xUYwJBrxljeEZKFY0_6tqZ8b6hcEW5Q8cOWX2OZXB15QiviIHTrMPYpbtUbS_1ufqjKfBmi9cGfHfJQR89nVStObNd7ow61pLFovx_tnAfIc1xlnp4tLKVo9nt2BPcfiS_umYv7UGSIpUyarRCdB8jAlCqv4APT1btpqmH6i_9kfCnzo-q3L3E4mjN-KKGjtbIIrwoW8ix7k9HaOfFhzs63SVjX77MGsVbEDc0XE64-AHxfa1k9jnnaYYg1u2Ff5Kn5AUwRDc_60Sor7_kDLxBznTDCVtFA43qGfj0gcTMVpamGAh4H4cKjjQac12mk4SZkLiSD6EwPzHZyLJd47hHUjilJjkl7NrBZTadYFLCz7LtkWVOeK3k9vIZIK70A4ThwkekQiWJZ8Q9LnY7ZaAN1yq6yo3JHLpGk25IkoS2lzz3bLfm3nJ7EA0UUVKxmX9wA1PoMPMyMwc7HkHWw26TDQ04GSmu7MmBbids72XfUUmrTSQk1i--UjCHHzL0NrVocnGVec4hTzM5N7FFMrd4vFDQkr8UEFRMjQK1V_jFLYkjL5A13dWoYOEYpSUziA6zUSxdTwdg=w720-h480-no",
  },
]

const erudite = [
  {
    original:
      "https://lh3.googleusercontent.com/urmiVDH5Zl09NioxZafv8C2UTa_cedmRbCRaPHC8TsZl7fJ7XSRQCkrgTgPxP6r1-szLRWWANEeVQcxrQioAfC0uQvowO3INiFQpgt4gsxENSwMBkC34l6MA7lxhsHGkMtx8FhLdvcdLE1fAS-MU9SCOypdRChuXBhxLj2Ge62nWXCCZrCzMH1lPx-991luuF7mNMvAM2MXYnRA1mC-QCstHuWmaSRT4xBr5jPYlv82syfb6NneGJQC4cjs4h59a4pmPdjYu2pcejXhVrtK1WmYI9_pkczZ42_oh3kKi4mUOrerIVprN2-xTd0ttzFIqHhcN7pJzP3T2ryfaPxJdfYMn_l-3Z3HBlF80KTrewufP2P8o20fSZzXFUhXedQCDiMvrJeH66IxClhJ9wV-zsReEE-KtontH0KfnFx-hK-ZtFhgqJpjfNNfrGtElu9YVQhVZqUkMf9cvaJhI9dhCh4jgADFdpYgm-1SSe1vS385GyukzRgWPXSBZIVbVNCbo44lwISt4CMufS4Q6COxf477WFf0dbBo6tc7s2KcZWY6YqMB5n-LMTFiq22g5EPuYkzQX7JtlsMYB7X0jKPXwRGZtYTRpCars5G9zCNkSS-qDlQwoDd7d21EXHQBuZU6O3LNRAqbAOs21T_34zLrVQZtgT_CT2DYFxcrO3Jb5KLJn-SNO7R2Q4nLAg6xL5R6LgOJ5WZxNtTjPCF_jxkzltHmdo29enFWbCccBNOosqus5j58=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/XqMlnAgsK9XC-aL_x2_FgR_WfLWSqbW87BRl-c9YwR9YE4q5TVMbXi0F0TGWMObsFVBC_6pf5JzwluZ710DzMyDz1d8N9c6V1xkCn8FEBDwSANYQ1yjIo5N5LcZJGPvFZgbkbhh0Q9Ga064Kh95Ur-Q6aEvqpml_odCetqAp7Y7x6ZICEEneZQj-nArWZ5NVLtFMUFrzfRtLGf7QextP9z2JArqQrutX63RNNqeJ4EIz1TtwAjXTSwiRVWd7M0UwkSBvlHVsOMzlOaYScjHTTrSNnqPbv4vFXBkSUmLd-RxtIvC9envmdWSyMbKxx6JBXoC2m1wt5Gltyve_H58-k_pOu77WiR9AYSC6hXPjZY-TYe5_wi2g8QoebxlIq-R_cM5H9zH6I0lJrlTjAFoBFLcxuAHj2kpJ319SiQNMNGO-81ek3oj7ppBd3sqJXhTkjVowRTSQt2tw9k4Ae2ddH2r8HZskLEwJwvuZeLab6diJJJPdCJ9BKX5VknbApxKU4z-sntGiqLLTpimkxQjGWJhepjbax6jI4lVcdnfp6STL5shWutj7KEziZuW-zMkiPcMvAM4OA6i_pd3VUSXheD-sL66dX96Q-pr4ahtOISoSXibTHNatMoQLGvU1Sx74JkVLBuvrF8V3-E01wDiykRS72JIHz9Z4PWIKJARC0MH-iGlcDjdTqL6xBy3-aN4Y3kko4L4dw2l1I5_WN1fb_k_ooqZnimY5ONb8stpcau6OiB8=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/-siw1Qd2FZznTkfTVkBHroh6bRPxxsXTsRWe-mFUi3ZfE9S9-L2X2xTAWgL8hh9Aq6tTEu0P6dFWYsdCXn2IUrSCjx56Cvnp7Pz-MaOFvcmClzX2-ku5cvhwcidTDGkTacrnLXFnnjnfKL9o7uPfFylmu-IOOdT3I4X0XBatbL2nGyG5gvnoWF56vQVpj9ttRAmsYknVkQmD296iovWuU7hEE3vK1zpwoJd7qA2v5WYqRpGN45nZGR1dWxs07rP7zoui24LiOn341Kbi2Gi5xY-BW3V3WUYPBVqfimGkDEjB9qO5DB0tuxjQn8hHIgt_k6jCMNBoAgVR25Um-p2le0B9q2JQZljZmDm3mOsQeO5UQ3EFUkHG0lgZ6pol6ryg0x4yXZCcDsbJybklQ2JTfk3BKD39gYBvSwjjCsAOh1RjEqdxriOxQbaiL8dUc1aQEBDpuOLYQ9IjEb_miJ3KWtS5Am1oyx24FiR-gO_R3ekzW27z26v0kL63ln-pcb_gy2mJ8xVLe4eFSLi-Vg5slt0OxUZsnJNYjqmkC5r3Sicin65hz7Wv2-aD7DpL4BE_TjglIy7i35tkAJwKr2psMlDb1GLdEzq8zvxHvFq9VHCZeNq3F5_FKSBBC5gw0OyBpeDx7sQn_ueiFgxtSi4K3o3mHpT3QdkkGB-17u-lUD9S1WJXn5jCGTt7O6Vd8Dqtl86yS3thOtH33T4cEPvxv9Yk5yn_sI_fbUyqDk6eXGd69RE=w720-h476-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/uWv-wzPvl3Co7hTZvj7DLJ8LpT80jWvuYB03MD5WbYuP1RvQhLl_xst7UOoosdACyms14tIBKY6NOephyoz9p4AKPmaLFuymrahFRxZ4TlIvbjQYGR_6MacDv5f6ByT0gUf8WjsfzsJlY99SW708Qnbrfc_-pcM5A5j-FQL5pq7HysPwK7DO9lwsTJC3K_t3PS88kSPYMg7n84yg7Q0nK0udrMvt1p3jONtKmmbWEHTMgzmriZ56WuWNXBwHfaDU1Vv__xnhufzBwdet9puePbtAxj_auxaLxBwo9V9QYbssddunRv2GllDrzzkUN-K_78o7dI94jL5a0Lp7MkQueMfqcELEfL7XgV3riYfUfsz05rxlzERJmdz0qWmTVx7wq8NnfkgPImADhuzdGlInC86oBsZrQ0G_Y6-0ANaQTP14MA-BqlilCzIGyi0DjFHw5V69kThSj33C5suJ6VsW3F1dafFhOZ_5C8O2vbP5TaKSKF-aScmLpKGXaerOw1c4uiuHBSn7HyLzd_uhzMZrDpWO-9BMZey-tUrTmfXkIdtT-9_3dRA_Ko5FmU-eoU7nOOSyWLPIJ67sklxuHH5A8ZfH8Mr-z9D9Q6-OOV7Be7xC907cBSKRFI6aq0Qd9h5KYjqHjI2yU4YzYlHxjr9n-QM_fCJHFeen6RIJiAz-vEEuLKnQzTti0t8PGX6egnFYHTsviJctTUU-s0uk43z44UaTNExC_Ob46jKR_GznoavDh_o=w720-h476-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/AwPeEMMRR9mLzhircSLDyOmOF27nVik7ZO4C67n1e6gX7xzxJ0k6FWgA6YAv-FVBOb1giiaQu5M-73C2hwRRtrN3U-AQl0hw4itxU5QvLg0BqB1CC0GDl7uWj2aOU4TUeS6SZ_OEhJcg-_CN7KDajn6kTsKNL9N6xYxARPpWzGndeNNuaPAIbq8QXYvvxBFJ44D4_5ULvfrrvoDY2gmKAKtd_ODConzYD1pWj-fPdvUsfwglqus_oYDS-AOeoyQqa3-HiuZT5q06OYo2B9znk_guaiQ6ptF7pDi01xlDQIoaX_Su_ZeBoYo6HfG8DTgoNl7yeoOljCMAeCuUZppBFxFU7hQ8mZsWBw1vbq3hsIwUNfppTPd6An_W4G8_aYqVoIlpptVOIP8TAWVE2lAeeTAv64ATGYtcuMo066daSKYb_F1VhRmsY1n4l8EU30duaZcRRBxd7lCFzJGltLc3lDgbkC9mnjQyaZUftgH9gZvnl2P_ICT4NGRQo-26yuHzDQjUa-0cfNUZOihjpCjIBsXikC_ysfPiKZGXRoUbOK0ed4ArbBrTc_jRonedrn3RnbNb44331EiDbRI-fRM7P8K1UbIGiTQTcmMxAqQkY5_lv6iFgTghyRAY3V48q7bDPaq180wfn1okQr5b2oF7E-JTz6MNBhGkNxPB0dHXwMXbY0uY73ZYFFh6veteWGWynfJQd7STlzWvL5-c9nkeD-10lXiRGH-hpBOLpR9ygHtMPaE=w720-h476-no",
  },
]

const korean = [
  {
    original:
      "https://lh3.googleusercontent.com/25uedS3AASgR3nI9FSTH5EnkBQ-rfKY_qvs2dMEgYOZLVSl-WmVMx-GyVqXqaVJ0dfl6ZSMn_50stHOKo2tsmKO2AtMgSk-QlB-zIaxgFI1Lz-ECt2jb9fzHUq0QfIAmixunTw3-Hy3drFLR1otK4ZNLSJ6v94Tr0ZrMTxlamC2cu51C1-9t3iLlK0bP-av0dTzGh5od2p4Boh1k2c4NowgKEhebvTUZWIHKsVS1YLNIzyBxlwC_gFMlUhMI_ZZ1wT7LWhEErfzcXd3u5jB6iE1C9KjLOb2lyKaxevmNKEhXUNfzGv8DjfefjOzAV0GxMBi6I-vJaFkpw4gWBkL7pzloPUv6dX3MHQhtHWb97EZZ5hvkaMR_tgHfGzVs7oZoOpjNHUqSjkX1DuZI5RRas6_1ukWycrtEPvwGDhW6GavY0eo4BMb11D6R7-pFBax-ffswvDPGRtQGuburKLUg3KcWf5GZG3MjBP1l1GwH_Rjtf9d0UZNKt439FtgB7WbxDYQuHsDPQyNVSyUlzHWDhmjV96UGt8tWTSCl_enSGGa0eTM-PrIgdCefPtIDKJVAjSMbxqLhzA6rAxy767-1t5CiPVgB7hJpl1XiIFeerPxbpsN0irXw6OQI4C9gvA2Z2Kbooik6HmqkBS2yjYL7OEqq6iR1kimDK2-LX6wVJcmfn68FmhEcPhMdM_fED0mO97nlVreWjyK6ob-0-zlabJoUjUOAAQ_GlwnhT_Z6wG201QU=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/hKz002kM8yqtub5TvjSwWz_89PB6-_0Si4rdwSVpu_AU69_11ymM--bhAI6SVZx3RXKH2f3b959rgQs3rQn-uTgAcytiLnLFCVtctH5DIL4kzpvqaxf-Wka0htyqpVi-jGjH-ZTM8fe7CW1XgqcPmY_gNqC_GrAQbwPDAYGYmdEnH-ZcKWunnSPylg10CNgqTcCaAolmwAvTIC71HB7T5RgdRwuChloU5bSa9LXnbJradSf1fP5LtbRaFKdo190RRpnMwhrYp_jQEoCRFVroE3X1GbJ8hJxuGPSpdWPcnOfBhpHTgu2Bw2t0w3Ncb7CJbVwjkgXQRbq5HVr3sbeFh1NWw-oc5ZJ1YKhHofjnezIwPnbwq78JOz0kE6TyKXGN34guIRJuWbp0aPZs1qRAgXRK-zRzo5MbrPLzagPTZQektQLA08bQ6xf3CXEv8RT31JXySLMay66U9H7dL4OdO9lXtJ58AKpZqCXiaXV-TCauDqhWqWjIqDcf5daFoJo5iZpXqg9WwI5-PXyBOyzysQF4fKuLlnSvmoF4RdOAC4rNFKfd_wOROotV8UMYiCS-xYhG9BAAGuN7aPqhokdUQoq85glfuTSs2nP0_5FsvQhc3ymMAOLVhEnVXBZVQ2Jz0PH-NsPBPGTPAFlMgnrVOmvbpudHJRolGdMtHiLw1ZNhmDk65RZgxZdmEONY6a9WROU8FxcvD3ooOCRyo3PcqW6-7biGXq3t0Y-AoszZ6MkHXlc=w720-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/9GD_Iw5RfkUh7tuuSXc9HaGhzt-b9BFqEvWhtB8odycKB16QiAJIm8eILWe8SHA2KWab3A9LX5fGo7OuNu2Z9qyUaPqUHfoNDZaXs6AsUlinYdftR574YDN8rWb9bt__u5jkg32GJnWcrhn8BEF8oG7m070wdff_oqAN1RswZkDaEdY6gt_xDhkp0e89tUsAyChONgr52BOVYTU5iiDwBwvgRe9Q8Wo92nc7vRDlgYkeXkKbSc8CFT6HEtSwxzqw1tP4F2OptOi_FNWwBShorPAdMYzjax4M8kM4K3nQWk5I4Dtyv1R9BUcjL64aP1cS5T2rMRFjtiCsA0BW_ZE5bhlcCs_cpgVCm7dRjgEatcrVguaGeyHSFK-vMTgn0BBc0KJnqikZpmWWB1OykLo_ij8DyL-4bWtnq7U6wMPh-ux5XbMrpTc4qoxvCZ6JNqF5A8go9BneK1QSV7nigXQlODRnrXI6ej2zi_LkcnfrnixWz1Ztf7duL6erYlQ5umDg_fpEuNRyMrjTSVbxxG4uhqrvFsukISZfulx6nuWurOQV8s-MK0gzkvdgy7RG4jras0nUoHOJ-K9lxnj71RpRQb65ggFKd7w6AsD6k0raOY8K2ovb--gF4Kw1LwS1rF6Qy45fTDUJkajUYBb4gju6ocXeF8a-bpqUMUHSQVWrNw72ybVO6qPBhlHtmm3eiGVRnofY03t31a8vjiXTe_u7ytw3cbDzbCQe0kfYpJAZ5fTbMJw=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/RFvZ3LUb5bYYpCpqb8-IYr-wgUjOZHCDR_PIs6g7E33WDo4L8AJ7jmevw-cPB97bB73anffthqntnMq_dp11SSePj9-KKv0NYbREO1Xt-aWU21PZnYmB4vuKFFhX3b8xVW2D1oBJ8Hh2JKLUPvmju09O7CnFMx7zaHjS7_G3sOAKlLsV92sCzv37y6ktUmwmowXp0ayephqdbmPXwidf_88J-_nO181yWk_jHXc8OsQnyqACzGRyaVA3t3qo5htB9Gj-zbmcVgvWph7JT36IW9RIr7jTPUHjsh3WYLHw_Iu1_m5DYnA2GMjOanP8A0yMgKpUOqIRqlVirkm87I5WU8JYvU7_DFRXPWhsnMeqrVCl0_tT3G9GJDojFY3XT3aaTDGOCcGM31GyqnTaIynkYKactN_0lqIUaW1c8jQZ8dWrr4MJzS3m-WG7sqlcukfvcaOGwQ5BEfb8BxI9kjRsotsP5feeGiGdkD99w1ifNbJbrsAbs7kxXIpNogLIo2H757F9BouFbg6AiDRyfEcj00F6n0g_T9dZ85Abb4hEqMene51l4Yi-51sYuR3VNnWAqtuIvRJuA0aoxIABXvxLJBQ8bVTuTYtliHU3bVmXilRuoBsaxsB8aRV7Jw7eh4LCaURva3Tr5NxvU3uF6N8TuzC76_0SwuempyNvyIF21J01qqHYzMEeGNodf_KV09uzSRmCC8DA3NreLYF13ruEAgzYc314s0RjUJITADBEtL1YMlY=w720-h540-no",
  },
]

const mun = [
  {
    original:
      "https://lh3.googleusercontent.com/FvjzSiTMHW5dbWecSyTYNAEsy60wqmO3QapguArLv0XIpuVYXH01FDzHd0ZFNrSRmjN4zlwGXyQbJCMtJfjGzX8CWzWaL76g2U_BxQSDU1HdTb9N6uMz1Kgl6oR0VvGOOUGHEwI6FFR_ckjfyH98wqkdboyaO8CJu0_Hu_5P7rV8SoPBFbWuXl0tKC_dgcozeMb0Dp-Zzf05i0oBD9L5c7rNdwTshrxK8V8efILDfBO98kM-q6APEf_T-M8dagBFYYd_rfXPYcTyqte6b_IDQSKy8aAEGrQe-bp-rgCCtVxEaXUg4kT-f_c6UtnlqJv1yKKToIJJHVK84q02xfuiwKm4U15SDA9-oWjvo3W6seCCKFc4yIIvrOUQ7EiK8Otp_kTWh3GG-q5SmiDCDVXzrW9MtxlEa9T-rdN7d9bL2Bm3ODld2VnY8v1dpsv3LEFE1c2I_5WkYKAbyLbBokN4itcMY3bpTvFnSToBrGhdBRHKNLNVM6q-OV_lxC3i_H34OfRF3iDYA1ts63Fo-pp3v9Ob4_wAgFfCDuvXF_Azt9TWDUTislv2N9o8a2Z0-sxPt99GGL1vX1VvZnnN0Wj_060MX87j2vjhI4roEardIwkxQdjxO5JsxV6rQkAvzVmAi6C8xEipkUGnvPjooEzbQgULAVVGWwOjkmnYF_bhfykkBncUlbATBw6KAsNoUBWZL5dhmChi14_KsQ1iQ6QBs5t7DN473Wcl1SQNmil2oVtjtPk=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/CJcfA1_3PIPzr1mLo_pJxJjYiasdAtdH0jqsfwKZDJb8Bn8T5FPFA7Yj3xxRXvTV5208ujaieyalmbDP16klfomGXq1fnzscjEtexH92imJZtrJheiT2QVlBY1BhivLjkQPsPYUy5lRYtInQkNAyHSEqNo5tdsg1bNJsC8Oxxfg1SxkdFyrr2mallnZX1qOhD1LeHwVKl_07juU4p-eATUx5TTJUwdgyCo2QHEiPZcOzmN_xIw8Dd3jZGfGy62qjb0Tpp9xSnhi0UafIPq6ilkWNjIGcDTi9-cemwDLRTuTQRLdnMUeBUiZU-6ZTWi69rBIX06Qz7bkQQyFFTF7R7rICgDnkGEB0yfy6po948lgDZKdOoSKY6VYl2Eut9l7YUw1ariahbOkZSTzfG9cscab7Usqo_Tpb1deLuzhnss0FE1JDsKKpaqxHFMQxvqkyZHWLLLs9udmJxtCSNgarS4yG-H4OEnaNMOFB6tzpsklkAyig_yP75KwjhDzplubhldo7_UWU_caoI5UeeLv4tpXuAKv4l9JrnmdEYz7sjFaoEu7brjnJS8pQtxq-uKl05cTKZXIUKlkRr879pqkMtAfRjAqXIdHHUOikqOxaUo9JdSVS2TZ_V0nY-WKVKC--txP97gk6oiIKzqeC5hYRerV2HrCeGBsCUmptMVEJSfVLYuK11AIl_UBcbbEoYKyi0sAkiWTDKh2nSviDpZpuZNGpKEMHpnlhR7N5Xe21zE10pyI=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/89yKCyysZ4nplI5H6qhPcnaSpEK3hAhGxjldNU8ZuQ6cemtLbLZ0ylvGb9abpJXIAmfNA9HaDNEjAoduVNkGxm2PAIbI1lRWkoKV0RmXB_kAjMMH_PWkSQMMSi_zV24S0BpdfqEdKg5B89nyYcfOlEaOBLB1Zy4-wzq9pzH0abcVvCkNwB3fd8yTTQgIMRULtClbe48mzsyIMZ42CuWuUmV-Pv3Q9uW4WQ62cyOa6e8rFvZ6JFv-h6zxBimDJpu8bhxan49KkNqhRGDvybwARjyBxqRRnj62Z9TuIlnWAkhGfipqmKAHrQ07micsk0FdeeMCC7OgqzyzVshSJsmxyHQ86f3stgUhKVB0BqcYsLHtqRoqFSCduG7gRCl1OzLHId_pnJvd8AU_HRXsxg_GpLj_YZJYKWRag2PyOwNTcapFZnKP5REiq-zGpXxKfzuZpnFGujqg9qjFd0ReF47IOoemf4xRBLNU00DWkKKz3i02WL7PfSKON1xKNT2iuqkrwQitU25i28lwfO3X4VxZifQSVMcfvDaSmbd2oevUrenlFMosbjlCZxo_I-R1eNxmeTjcIYNFxVCWu-ncYNHNPggFRSSo4cC-dcOQK0TVjkQ3UGTvVPVeTWIQBzKlcr2xNl0F_Pc6Rid70ni1KsO0TID8FJIx7Z5dPGOW35YP1Mf2R8zuRRxHg_RhrpFlSexcsuhlZMuBCgxpsCMakLeW0BoxiQWRqmqQMmMeZEx7_8m7m0M=w663-h993-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/y7ZZ2f_regSdiGclVw7tXs46qfsxQAC0B9PJEObDGSy6cA2fE4mcw3qLRZMeoVRIqKY7lGYZhSXjXWpgjRszN3_MeM-iOR99FZtNOwD_R_naldCYwFg7v_Gze5vrPmMybjlPKtNe77wKbe2QoqZ30lk3c6urKSGNA0GBALwdQE0OgA-By7xTcbnnuYqL8MVGpkyCoZGK5klik-5E9S5o4wAMmR_2_FiIoq1_JMkE4Ch9f1X80JgqF5d1riz845OjyE_KQx9EtVt-yUuRcNI7Cx_mZ8-nKAvFDZNmGkPN-zQr42ICSv2FoVGgESo9J60o2YSzLl7zsh4wgHpYdRvE4mp30wmwI9NEFwcMbbZNDAh8_b6Of924eELHaiW0aoMB06a2yTcODHCiOmdwdp0Yai1rd0CXDYTPDfNwz80rcouwGNo9xRYLZsH02AskT11iNOADxByS1AM2Dr2qO0oh5hi60xMJ_E3B-73FvlYVGdXxCkimcmYtb2gOgPWyHDRFJCw-0F0Nn7huaT68YLelBCGHMW34NNaJClaEaPCyWsDDlEDI3X9il7NI-YaBZ61PD---TP1tdIIe8Bh_VXM-9sweZhjRhzKyyPKqYIoRnLQgIvMlTmHH6yfe8BiRTktVyucbddRcu99f2hLGaJKFVvtRBdN-6bdC_ZxE07M0Zpw6mtypx2FARY0KIuE-M_7RIK6xIcQhQ0B57ZzRdBZCFcM0J8X01AckAvEwZSZPfwX4w-8=w1280-h853-no",
  },
]

const career = [
  {
    original:
      "https://lh3.googleusercontent.com/SQhRTHyG__nl-qi7mcCdJPM9KZm7eXqoKPt-IFxVUvUqTIVnQJR86DfNW4lMUPhwIhN1Uk2gE76B02T2DvuniDJ3qtam1XO3VhMLRBLJUjVscTkZVVhfPZTuzq6Pj1Vv5nRn5Y8L42eMkdTw-PrCJK_6i7oTFvWgwwIsi4FMne8qHZrwNTRS_4vtxBhhQhXqtJzu4C2gW2aeKTROKMxDYLq_ZFtPz_pk5WhIQqe9WD-HwWxwntRYdLUB3-stJ8m_QxPFixOiIKC1uCC3-ALMMK4QHf83RqxSw0501C963PMpMwkpICZkU-wr4r2TRrczGjsCwbwkRa254c0VVyIVDaNroaezsInhjoBuyRpX1CqLGtIRnk-3a8fZmch-gD4GdO8DdZYZwcCXVChXp1a7Bh8aKaKSXW6NbeivEg1b4Ux1_cmfsIGDX4u1Lw4DuNkBDVRCjIpuMjRVXURYNdAGqqONYyPvnkTyEAP2ebvU2hAoVSPSUkSj-tPExpH-o1Uvq97gYlkglVtu4E9sZ9mieJPhl5c_l9YiihlY3pPKfd_5MtEgfI6vXtXW7-Co16GY0x6WVvh3jdY8EMD7j52khZs_4dS399EumW-QLPvNPnKAUFfw5970lLC5eOBBUjAZ5jemA9XazewlaQYMSXr34jEjunYyp9Y5NkjdofhCqVCvpjeRIWgVI2e70Qjx9ps4aHojPB_unfGhcHNvXnyB6r-TAVe4-gRftLXxlJGR1R2zbhc=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/ngvyFDce92CrqVYcsTfBFr6r8VEXaxohhTv4kHggDS0HO-_t6gqMWT61YynZx6D7VlaiBgd2Scj23JVeegzhQFLMT8r-s6niskM-hq5hEZHY43XidnXs5_wTMSt1qCdQmox-V9N9yoYr85eFELavJNr0Bw2pZ_NX3tsXSOsG1x5RAXA4RPM6EpHQZ13pmB2Iqr1bs6m7SPRTyqhUdwhjnFC46JGTjm3ZRLKIcVLHfAaf7waOyhC9M6WXeX1EtFgO4BpwNQvwlFu0x0grnZuduitBm12m_6y8frtY6_zV4d5e4fwOjGJsXUierx7rSEa0vu6aaVGwEUIMiX__iBXutQYEVwBrZOfZs3i6ou41ZNRobG7POWjCdtqCFSIUjS6CHuy69siCV95fAaDDzaZM5IgD16ujxQvbUrC_o5DnKtzqEbZ8YIt2RzGZeDwIA816Y1nrc3RHcSl3e3BSrx7vO63PjfVk2dX4IQ5Z5XhrdcI-SS69cFfqcziOndFhqi_y67PRaiwGjaEJutx99L2g9I74569I7QSyKtjaa9l6TSh2JCS9bY0oz7w5hsKqF4T7Xb-KxriuZgTimoMUOBuvtSehJB5uJDWuEJ-oYPGr9Rf41mxcltlK9cB0wZ2yVYi815_Oy7rUTXwU5zHksI8BGqBIL2m4nPMYhKTdrKg1o5RbLMvt0Jyu5mXDPFRLXusXnEHIZifp2nB525ol9kaw_NVv4FqeR6FV5_mVb3pJpMbZMGY=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/2ldSo_kD2TEhFT0UNS5bPqQr_VRoy8ltLi7DP1MU5kF9z5DZjxfxWs7ZyNMlpSO084NEkcXunu1E4ewbr0rE5T7b7A7DdRJfocBRqSbTkLbktUIH5bnUubD-2bwIhZHQPABtZHBAqBWoLdiUO_IAE1AYPXkKOSWpGeq9sZcrFByb56EVkpS95R_8woeZmBfrxs629fFLj6GlpsnkXEaybRcchoF4FgpEAwW5Sb0t2rnmek7c-J4sZ4aN9Xt79ylMUCqIFsHg_oe6y8S7pZxDz5i_3C0re8ES5BHuiTJbxyHjaCrkeIdm2KOCgaCxuwvz4QYLbrDuTpPgC4Wpsa0aHjt4etnbmV1YqAdSDjmFPzPfgM1YNyY756O5eGYtnu7XPQ0aeZ4WgcAnXvUdnnxPXCaOYu-r9M6zsLsfvr1lvcrZ_jlterf4ZD_xAz0LuBhqtjug3nye3pzlmbaXDu6rQwB99aeqHaaUj1Ui49Z3LgEk_jX6yc5bKfkmGbpD7ZWxCYdVaWniP7e77AfzQMIskjxKQcxHEFoU-4dgyZjsmmXpG33bt-cohURP2ch95ci8aO7GuCNlwFbwI2TkSgpwbbq36mboRCf69mVPsTRy_1AZeu_ncwxPCpLH7NFknE88NpibQlJK8kRFLuSQ-Ild5fVw2EO-MKk-KPcO5DxYtOiCf2m-4GEjqn-kAmu85lcji6ifQex7vdd8lhC9GfnMg1JfEu0H6Wtq8hPVs3NASwaiCVU=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/lZ4pUd34zDtCeMwwLL5RrrQ4ANKnYHQlE0ZyA_AyNlvh0_JT3dw6dQTfaM_sEJ860PeqR2rI70_F4M1W8tbaPDW16XgX3SdxsK5YxKHCONkvozHzzqiM_4EL9GSVBwkiFf4gYH-NKMhzdx_RSoPYdj6Ky5mA0pel8SrkSisY2A6c4wo8pYKH3X4E9_Npgb5j-92xR8FX9pdeUjX4YIBHE1a-XJVimTvIAux3igOIHRM8KLxqMq2Fla7XvtP0iMKc3ERsvvpg-9syECub1mhicvTFLjAFAilklbGX7Z9bNpyZjpqesm5YMrk8u9Ad4N1XefGKJ75fYSB3EGj7-aK_e3Fb2RayDB4Q1UEvSKHbkNubAWzhG8Bw4k0in90Jg4Rn5vvkiKFeO2fAZti_EK_aInevQ2TT-CyLdY_EJpXOh1IH7qgpzqoTqMEm7jLIiRxujUlWgn5OyNPtHuvwDFtLHEyv3SS9EHxN56uCu2PsUb3N6MWLSEOmGTLhgRtLfQaUmaoFwvPgoh21E-WhHqeqKz6cwTg6KQzENvXW77vhfLQM_EZd2vZu3xPZVhrm94Si8DCo8Bq44DOtd1MkCHAL2_0kn3bJO49NA5X5NwEZJPsFEHEQCo9h95amP6WyA86mcEU57DGvlsSJsRAhjvWA0q062J6qMf9T2oMsSDGuXThA5Dngj4TH9Om975bslTTFAyCguGhsaeYuGx8GY8x92MT0MbvNeQqHB_57IuSk4iiI53U=w720-h540-no",
  },
]

const samvidhan = [
  {
    original:
      "https://lh3.googleusercontent.com/A4YS9DOWKSf_cX4XOb-x_09IbLubesJ7UwImgslA0jLOD24b-g3SC_QnMHyyxyeb-cj9JPk4VRg78ugv3as660QC0sam0306jtwTTi99RNLl5C3eUlbZOxjAmi8EJPWVfuk3FGpNlQ_KqeYVDvEa4L04I1w0ujNSv6qp-_Ls7pz1I5mDPoCvue0uDe_KqQLJ2qV2njqP_cmU62PeQoOQFPRutZkUBSBvBsOcPHfGAS5VYtexvBhprrr-OBWLpK2G4hJnmmXNWsoIpHpucwrlUugmp6GrQQoVZ4ELSmsbsucpqFiTyfoOjCHjKtVrHDr4moFysvhT_rttawx1jfhyVgwf8Ut4zlmflJrUziGwOmWZGkfJQpz_M3-7k_kI4EthqjVrqeuZef_su9pQ3f8V85Tfs2wm-cqkM9IXP1UeVg7BlUjKTGKhG9e6qjXMVJxJ5SQmlZ3m9JoGMwwrRaOhrx61DPCpF1ncwyjLKYj1QhAD1wOyewt-8GPF90wGyP9uCZ6EWmaNM2XmRD_UVspqhKTyrvsuLdP2GL0dGI_3h0TL2ozWSDSqebI0aCgvRKwnKoTScDBPQDcKYcXVbJjFVUZE9FXDc-q_HzCySeTh1ihBEDkBi1hKCVXGQcVWajFKhvTnsaUEvAhcqsHjWJ7PeqkcvzzOSOC_H9CsJVqygjmtkAWLRFu2FnCPL6TaBDDabCbYzCw5sDgtVk3i7VRkAN9R-BsS50dfonP2iFhNBhEbrhe7=w720-h416-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/TsvcC3uoDovsTcOmebFFXnsKifGI9jmjzjrCYvnmbxPpIMZpLOzDsOVELNJBrdkPF1z1kaa2hbvfHLO1ybdWwyG0d8RDWsysDka3fDKflBKB6eXW3SZ4UjJqPzdqTl4aR5CTGubgI6sYFYPzVG6Qq91PxTr6aGEx1E3InL5WOpxOKSFwAbXBSyqLFCP1Seunkub9l7gmXhmDYoZt7Bmuuv-VjlG02k5ghA0BUcm_hv6Rr4_DxTz6almp23ymf0aexSb4m7qgF077ZWt3g0hBiVIkVmHybOb0CCqJOEeGBGU28oUE2Ciqa8mmx_ugPQoHc7Ao-0s7tNbNZ8XcY6E1mXmCfTehtuxvl3OtWNy8TDAhwUMFt_xNPwNEd41E7XlF9Npga3yni9E75dPcd5Itz8yjJbN1qjPp53sj0ex5Ovkr1ZfP5sCr7kLQef3Yj4Tj81Ca7gjXjxmyzy6xct4qfCry34Zwiy8jxDLwijeRdT-FqogjxMbeyDZ3KBBTgPgFV8vXjWGdVf7_mVEx-5WdxoGDMZdus5ncedxWiK74OIbUM99S9m4mRjEyh2ssOrmJgI54hxF3Ghbg8or15XL9OyAoTSdl5UcKzPK4MYoWHMq16B5d0qRhH_6eW4rtChJdldRz-Y5eD1UtZ7Zswoh_32mxaYywfsEmN5EVWZnt3CHNiZOVDKlHMGv17txPawIrrAy7LWTYKWyTIXFYko3ZNhHLn8HIXgXypSNEVVo6SuNHfxRB=w720-h402-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/6BJVWOPpgSFdST0QUsVHrg7NP1bfLpTm6dRfLf297OHKt_VI4o18bUTIXi3jDuNdVP3dxGKdGjjlIqaDyhZ1aReABkyO_r4MPmlUVWbiSA5NXoCrSiqBslEMF8N1ExBls41oyafYkVHpYSe4oUvLjKppZd_U7H8p8TN43HEskVgv92c9ArqRVppC6wYE5B5bCy1aFKh80oIYyTKW97s5gigo1TnN6cVqbj7GyvKmlUOMCUUgiyywOsWGkTgbh51A3ftVpWiWET7Oc4cAxPL-VBynwxkngPSK_6ONni5G17xkQV3fAKS5tPNsuTsscG243FQM48nv7Irlihsl-Y8qJmw2z84ZFk4Z2ZX_Oot5wyoBcMrCSL1zUNySH7VXULm5R_sRKEhh8QlbkfqrOk6dwdtW38tCeg-RC4vU_TRHvrKght8WKSb0zjmIrVMmj1FP7q-wENpelfKa-lh4NU7uHkKw9gicE5njpXLT9p3h51viktlN3O3EsVExqnpJXjFZ9x4tPVT2Z-ryJBGEfQplEGvfNBYLTUzi8tZ8XvME0oObQRdOQ7qm2QSHsJQuM29X0QhjM3HmU4qm_AyTwC_jWFRnkv05XZkoVoHOkQ20z3XuzjUNgFO77Dd99n9pm4Ms2eYamkEu6LOurQ_rxh4M2Gf6I31YL3cyktFAx2C4u4yVQUUipSkafkIwOS97qywQh1KPldPaSpDXPtTgA4Lon5ElqLUgbUUoNd3nh0aKEY118rTy=w720-h441-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/ww5kNs3AQfYF_-YVh0G8OXWEqDNdjI_WMiDIutrI99XnKsAfAtgbZniC595r5dHlzZ8t61KGZXQHEdZMn4wtFO6SPdRDRoid0QYvSzAcG5lDh6JxZ6j2U18OuESEWyLy_xnFadd_7H1DdvVQu03TS0Q6QQSNDeut3Vj0VtNRG0pxSpVlz_hH1pLn92x5VmAZNHkS-dsm8e9tERoLXFoN6zEATf5wm09--bqjsnNVdDHjefVu_SiYaQjDWGhRPipgDmQnpSmYQg6gwqT7sT7zwYudqkMU4pOX_8ORsfU2NfYS6rsNeAxYRhWvYaQwLlStvrdDpVlUbqv3fPqYlEBReGqMtLZUeAZUJL_bacQLgGaXpPVnQ07cSTf7_Yn-UJTLJztu_puBQbpQ-gVhc4LT_XBuvmJycdc7DN8De0GS-P8H5s-xo0EmIdMm_oFYQlHPu1MNCTNZGickVbQPkSVOospfz_5ngWH4SnyN_aHoOasU-QoeK89s0o1lbljihSM7LDYalkFSpLfsWprdzLl21h5jR5_rsyyb850Zz1wor9lwfTlMqoSpq4FdQMFpZh-XBDi7J1PLbjgeMKTZGTIyeQ7Mg1dEchxcmjbTWXnOgQf0u5oXD8xGDb899R4dX_XoHzYMwVuqyjfjCic7n0pmHoItnbZN4MTVI4gD9_Upp9YdtqON8U1PLw9tIrk0zcrwjC9ocwr_mD1oyj5bht65uJRYve9YG0UcdZjXCj8efZzCK8V0=w720-h390-no",
  },
]

const self = [
  {
    original:
      "https://lh3.googleusercontent.com/4t0GbWOjugjeHs-HdaoKM4mAVpusuO7jqvT8IP1PklpYC_m-Aqlkkdc_p4bZnYARqLMKMQFoEM6cPC_19EiQBGen0lFZVBAVI5EcspHWr9mITkfeczUBgMfJbdMaz_EaqKlUhR6y2B8J-YRdsBoVAPp5P5Ejw3r8y8xVJU4AWMWPYcVVA58PcR86JfZoMHufsb4uykAooCN2C7uCYACuc0EEF18aLtPtOXKicydrJXbLGff7g4y9u2yo7EBmxni1jmUBNiOvdcEs2SQkuCMZp6Fv7hH3f_tRdkS8OzbuMBGy26odFMy0aeLhG3nx2Gr2iffYPpTLNVVoVmcMNTX-SdiL9MtN7pHwHwEzE98cCmDM1zCzsufnokFeDgmGgnLmwetwJkJs-MxzCtvpUB0y4J88hBYLVLuEOyuyuo6roaPQHVrWQgInb8TIjELkqZYDRyOS2QyQfYa_KV51KBIuxNYYImMH6iHbZh1wwI8pbSOwg1OtPkiJmu6pWih3T15T8pikDprYyYOE_ZkRBWNIfyoV4rrerU00gltsDrWrVN7dvyKf_cLf_8IOQ5Hy0KVyeja2fhsTV2XpiXEG9KtdqPZKQ25sYIOL8PQOGHvPhDcPodBqzkfXdfYYjzlK0oBE3cj3rzW-tPwWrxN3s1FyPOrUVdYs0_ZYE2IgX5gGPePwNhZVCfEkKxsrR-w8rfdhxc2HgvwmaQNiXuE7yzGArUFFIVVnmlstJnmDHRH4SHY-7nHa=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/1g_awKsSZWj0A6akmVLpoVDwk3BgiU955vU5a9S_eY7hDYOgGeR52EUaqaJ6BlyYRPgLtjSUi3smn3pcXHmNiJ4tZxizTZKsyyPQkljC1GauD-aa0ISxlV7KBh3vz4Jzy4rvuQHyyy2YwsU2KNLkgSEmP-xck7Z7rhhF4hcuhAOzdX6Jd9UopqU9rYR-6w0e7rV6aHPJMZeMlD_HcYgQPb3nHqynSUJeryQj2iYdBFfhNZt6tpTM9WoC2c71H9TIp7kuXNbGuLw-397yJkxEcd5ChAubpM_T0dOo_tZ0fxaJb60j_5cFaqXooBKjtgxB9JorIAbAkiDXHyliaqr6I2i_asW2BnMfPdAs-DW_bbLJoq15CyWwi9k4aVkf52k8tJCwnX94JPJuduA4rlvhG7uKIyxyh1SoJZEhoJQHTErvcn2IyU2353ZelJYSS5pKgBfSTniwpnezgZiCsbUFUEdp_cbOn5CrUlqAks2mIR06aOxSkENPO-zGB7U6CcUWa599XmxV-NbmNe8Cv7L0lV2LD10aWUgB4K2hXGZaJKJg-m9Ft-4jE4EMTNdcpmLa19g3286_tzFHMDYlqwbSpFLhdxDcFUsNkS36ME9cp_FfRBXAzzWP_ZJrrhkWlqfwz0ckU_zHw4hkhOIQdJ6ion2aXULZCsXAm8JPAiiSrWj7eer8oVlzfLDxtLIVOVFefyAmkMeoEZVcwqxU0FFfVzC3sjW3UfZ6Oe7O1GGkrybK71as=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/AHPdbPFh5xEuTGai8d2KfZJ0sGR6gTLkPexM7xFw9RAnhnNqLS3ac6xMCQXq2vpsVdNNdgGvy7f5AslGwrFLPUPU-1_TBAUubYV0Bnih0c9MNnc42QTDfmVLonzFo1jlfkKjv3cM09wVmeTIarMilm5lnseSQcVIrUs6TAVOJccNTgJEkU_st4ecseA4i7Edo_xpOJBFRM9dsgXbeQ8dnELu_jAvj9bBpmocAXCMhNZL2f2yVdGncNPfsui3Ej91kOJXzyUJhrUWundn4PuyUrtNSSfdeZNq2gxbHovZnb2gMPB1O18gllQG83WEU4V9jpHRE-5DN6QUOPHrorTpGOiecaNyGjcWpQw5LPk3GEvnFn4qVaZqwtribMsroUG-RdO3XBF2--mzkKB2zWcA45AQGLN24mtumz0ScsR5b7-pRM6js9SMB-Kg7KRBZSaHIdVG1wbfFYif6q7VcItk0XT8fSodE7Y5LqrVS1sz3_nYECmb92jaHnmxeDHmNNOPSQcb0QGWCNfRxSdSLVlxWqqDfMP9BBmsHhwWyZ-eEWfUT4yriLdCdW5-2EkvrNdv-03yy08Sq19-2yaMgdnmcBBdPKxlqv6KGdPsxzhx3Ux0qcMnAI1864paFdcgCDxIm-yAMIUYQIu4FUkvPLFkgGof3nfJLZYZnUfHfmefjUBDfZ2xX9Eu-n_HNP5YbNxOOsy1ik8rmXaKNjnTe5x1LD2sKRoBRWtVNrMctXyG8cmlZUu8=w720-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/Z9U0Y6AGfxxTOl8DhmT97_E0rJ58ooB2LefiwahMsriQdBbypoHPJB_FMsgyncEyEAS6CqYwNRsbzqod3i8wv1Odjdcspi9CuKs5yu9IVHI6uGvKMmfNSgLRFh6uA0g-9Acov6NQgQ1ODySX9CyEeNMcdwnVLWB52ORqM1XpZVA2FNIClTom3vfig2RWONa4mowQmpPrBud7ZiSK3nbplHUiv3ZGk1KjcpGaQWGMxd2igImY5Xp6nxxHhzKW5YNOtZegi6CbQEionbn6K20-TNpTLnmC7EDsgWhJQeXt1gGsxIOB9sQFZc2S38zdEHqrOFR2OvDHiEJVd2DiwcLCVMU69O77SuGOoHSbhpcXsvZSwZ9o09eJmz8v_Yik-UL0ULSs7L5EoO5QQ7VdkNBCUfQBWKcu63Hdir953dpkauVQ00o11dral1sHRCqsjomnVU6w9Wj2gx_mZk0ZzVtXF40_9Mlh7AT7e7WVF9Mb4P2PfDXau7KVk54HrrwkLPHvGUxbXAenrj3Hpvd3esUGJlDRkNVpNTUxvMPOeiR6mzf-I-rYOheGdhzhVWoYSFkirwyphw8VHba6fF81dZVGznihDaJ_ipwckiFBI0juJwXteMY9NvNww1zShifzTqtfWtUPvSUlk8QG3b74LnwvgWgdariRtzilSqgtYcyPw5GLahsSJ2cw5MDscFaGRHnyoV4K7ISEMe4eC-ocqgh61GN9x8sMtbdJP-huLbMS9nfmX4C1=w720-h540-no",
  },
]

class events extends React.Component {
  render() {
    return (
      <div>
        <section className={Styles.about} style={{ marginTop: -30 }}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryDebate}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Parliamentary Debate</h5>
              <p>
                {" "}
                For and against gives birth to a parley. A good parliament is
                built with good debaters To provide a platform to many young
                debaters to showcase their talent, Team Unnati organized a
                Parliamentary Debate, where students from all over India
                participated in a huge figure. The chief guest for the event was
                Sharmishtha Mukherjee Ji, spokesperson of AICC; the guiding
                mentor for the event was Amrita Dhawan Ji, President of NSUI.
                The event was enthralling, not just for the debaters but also
                the judges who were actually moved by the thought and words of
                the young children. They were surprised by the enthusiasm shown
                by the youngsters and the way they presented their research. The
                event ended auspiciously with the participation of more than
                1300 students who learnt to speak and present their matter.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={parliamentaryVisit}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Parliamentary Visit</h5>
              <p>
                {" "}
                A parliamentary visit was organized by Team Unnati. Team Unnati
                believes in secular and demographic work mode. Visits in such a
                way are organized more often to keep the interns connected with
                the country and experience the importance and height of Unnati,
                while working with the aided system of government of India.
                Moreover, 1500 students and interns participated in the event We
                never miss a chance to learn from the best. Team UNNATI,
                recently, hosted a visit to the parliamentary for its
                hardworking and talented interns. We believe in a secular and
                demographic work mode. Such visits are organised to help the
                interns, the youth of the country, to connect and establish a
                clear understanding of the working of the government. More than
                1500 of us went to the parliament and had a knowledgeable
                session. The team was honoured to visit and learn from one of
                the most prestigious place itself. The essence of debates came
                clearer and louder to us when we saw the real place ourselves.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={interactiveSession}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Interactive Session with Civil Service Officers</h5>
              <p>
                {" "}
                An Interactive Session was organized by Team Unnati. The event
                was successfully drawn to a close with the support of Mrs. Rama,
                Principal of Hans Raj College. More than 1700 students
                participated in the event.We work hard and our best to achieve
                what we want. Team UNNATI organised an interactive session for
                the aspiring civil aspirants. The event held at Hans Raj College
                proved to be a great learning opportunity for the young hard
                workers who got to learn from their ideal: CIVIL OFFICERS. The
                audience also had the opportunity to ask and interact with
                guests who responded to them with them with utmost enthusiasm
                and sincerity. The event was successfully drawn to a close with
                the support of Dr. Rama, Principal of Hans Raj College.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={run}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Run For Education Excellence</h5>
              <p>
                {" "}
                To promote education among different sections of society, team
                Unnati organized Run For Education Excellence event. To cheer up
                the spirits of the participants, the Youth icon Mr. Harsh
                Beniwal was present at the event.. Over 2000 students partook in
                the event.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={erudite}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Erudite: The Quiz</h5>
              <p>
                {" "}
                A quiz competition was organized by Team Unnati, where IPS
                Officers Mr. Sudhir as well as Mr. Amit played the role of
                quizmasters and conducted the entire quiz. The guests for the
                event were famous YouTubers Mr. Amit Bhadana and Mr. Harsh Deep
                Ahuja. The chief guest for the event was Mr. Amitabh Khare, IAS
                Officer. The quiz was conducted with the approval of officers to
                provide fair competition to the participants. More than 2500
                students associated themselves with the event. Unnati: The
                knowledge hub for civil aspirants, aims to provide free guidance
                and help to the civil aspirants. A quiz was conducted for the
                same which focused on the major topics tested in the exam. We
                had IPS Officers: Mr. Sudhir and Mr. Amit who conducted the
                quiz. The quizmasters boosted the young participants and made
                the quiz very interactive. The guests for the event were famous
                YouTubers Mr. Amit Bhadana and Mr. Harsh Deep Ahuja who provided
                great support to the participants. The Chief guest: Mr. Amitabh
                Khare, IAS officer, provided guidance and support to those
                answering in the quiz. He also ensured a fair conduct. All the
                members had a knowledge enriching time.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={korean}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Indo - Korean Meet</h5>
              <p>
                {" "}
                To build a better and strong relationship with Korea, Team
                Unnati organised an Indo Korean Meet where delegates from Korea
                discussed on different issues and topics related to India with
                different schools and University students. We learn when we
                speak. Team UNNATI feels proud to announce the conduction of an
                Indo-Korean meet. We try to learn from every where to expand the
                horizons of our knowledge. We were glad to meet and interact
                with delegates from Korea who had a chest full of knowledge to
                share with us. We also conducted an open debate where the
                delegates from Korea discussed issues of international
                importance with the delegates of India. We are truly gratified
                to them for coming and sharing their tricks and tips with us.
                The session will also be helpful in improving the relations
                between the two countries and will help in their growth and
                development.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={mun}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Mahapanchayat MUN</h5>
              <p>
                {" "}
                Mahapanchayat MUN was held by Unnati on 27th and 28 th August,
                2019 at Evergreen Public School where students used their
                oratory skills to discuss on different social issues. Young
                minds were molded to be better leaders. School level kids joined
                this event and they proved their point by a debate because
                debate and divergence of views can only enrich our history and
                culture.We motivate and guide the young minds to realise their
                aim and strive towards it. UNNATI organised the very first
                edition of MAHAPANCHAYAT MUN on August 27 and 28,2019 at
                Evergreen Public School, Delhi. The national level conference
                hosted more than 500 delegates who debated upon serious issues
                of national and international importance. They were constantly
                motivated by the members of the experienced and extra ordinary
                Executive Board. The two-day conference turned out to be highly
                fruitful for all the participants who learnt to speak and
                present their matter in a persuasive tone. The delegates were
                also rewarded with certificates and trophies for their exemplary
                performance.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={career}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Career counselling</h5>
              <p>
                {" "}
                Career counselling is an essential factor for identifying the
                real potential and guiding students towards a right career path.
                Students needs to know the importance of career coaching and get
                the right guidance before they choose any academic stream. Team
                Unnati took a step forward to guide the fresh minds and teach
                them the importance of different career options in our society.
                With the vast diversity of options available today, it is
                natural for the youngsters to get confused about the field
                appropriate for them. But it is very important to make the right
                choices at the right time so you can work towards it in a proper
                way. UNNATI recognises this on-growing issue of career confusion
                so to help the youth of India, we hosted a Career Counselling
                Session that provided the students with the options available
                and the academic requirement for these. It highly helped the
                students to eliminate and short list the various choices
                available. They all were happy to receive the guidance from some
                of the best experts and were glad to clear some of the doubts
                they had.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={samvidhan}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Samvidhan se vidhan tak</h5>
              <p>
                {" "}
                Failure to know and utilize the rights given to individuals
                often leads to their erosion and possibly getting themselves
                deeper into trouble..... So one must be well aware of their
                Constitution and the rights that it imparts us... "Samvidhan se
                Vidhan tak", a seminar on the rights that the Constitution gives
                us was organised by Unnati 28th November'18. One of the root
                causes of the continuous discontentment of the citizens is their
                unawareness. If they had been aware about a certain right or
                procedure, they would have received the justice they deserved. A
                common cause for all the unjust the citizens suffer is because
                of their lack of knowledge about their actual rights and
                measures. To help eradicate this issue, team UNNATI organised a
                session: ‘Samvidhan se Vidhan Tak’ that helped raise awareness,
                amongst the attendees, about their rights and the measures to
                avail these rights. The session was moderated my special guests
                who had high knowledge about the constitution and made the
                session interactive and engaging for the audience. It was a
                3-day session, organised in collaboration with Jawahar Bhawan,
                in which the whole Constitution was read out and explained.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={self}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Self analysis test</h5>
              <p>
                {" "}
                Unnati believes in uplifting those aspirants who possess will
                but lack resources. Keeping this in mind, Unnati, conducted a
                worship on How to crack Civil Service Examination followed by a
                short Self-Analysis Test on 10th February'19. Around 300
                aspirants of the prestigious exam turned up to be a part of the
                same
              </p>
            </article>
          </div>
        </section>
      </div>
    )
  }
}

export default events
