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
      "https://lh3.googleusercontent.com/fHf2JT1Y1gy4SmTpv0loSr3W1GIeiu1GCBRpojAmGSmZAAHMh3dy6dkgcqLdWO3mLPahyFGEnufHWWTfMjCzEqYRTSUefAyF8C2aFoQ672Rac_Mj0AU7zff5Wut6qyC3UrHW36JWNrKyeS8DCbc9dyFgFz5Aj10jnVhyaX5S-wFpT1ybdll3wkv9Brk4g8bubXgMA8-Vx_J-z8yw-bKjY7S922bvXzIguhZkG1NLVtqs8aAZjDzEMND4nWLVNOptFsr0okGB0wL9DhgQnXQ6ZxHM4XbZliJ-pWtJdil-crLTC3l0AZRIPDSD9sc7Dgp5vOmp__00AeDgOFW2SxtDpL7SNQ5NR3tunQTT4YKqW5yvGbLV05zXMRW3WRGMBkfoPB8ufHCx5bQgC4ezuQihzOxKn8-JNpzLIiYn4z45njVHN3WxmZn5P-ecD-WmgEhLh2W_gorZHJZw9ZcT7_XnIjStpo13JuuEyIy_bharMW4gPT4uZOpvZDVVNr5hQOIxocZvTXbbmdHPLoY6gzr95Kw50o1QA87gqaSLq1hMMpbN8F1uDAYE5jwAJl_Er1g_D07LqwvUCljLc647n8QXl1W0L6WAy6gUEv9chVBd1BOjx0IASJOyyiXcGLwybILmBvtFKHNgXPmy_UTXMq83sHHYkjZlBVghfv1NHK7AXueVUBOIf00A_A=w1280-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/nNFHwN9Rbg477qtFwbK_yY9kyfgpifi9qfdAHoCsFpIKT7hUpP5cN3m8YijQCpPIAnKS5MnRCUB1mt1QIptTajCkfw28N6Ux2KvoWPbv5Cqwjy7VtfipyNcka3pWD6qZw1e81iItjTPxLGpV8XTYvIPw9hjPLvxgEjbZvfjF_7tZQvFA_pkSt0F_UnjDwlCcykj7Q4IrOUIefe_PSocWc1dxpt3Lj2ln0SYuR8uO8M_NcaGu7LlYeFSjyVgtJ0hDzMXSIR-JbkTYSZQ8AviYIe2muI_A0SAzMlzIvg8rcqXG0NkUYC8fCpyegGJv1lAQVTuzmwUwoGwd3k2xYeGFJ0EFnJGBVtXrW3bef11EOBOnSnJeU5rlNDDJfp6HxV9hsa2HVVMK-VHx2E-1MRDQ5JNcUQDg0fHjPmF4nBinepw4f1wsJhWP_RBnQ1WInveErnzmDDo-0dqr9nc4ap63fHsuSPgsZhBzz5Ju_CsybrMbiDU02vYwhQLeOXwuTKDwnzDxVaO0pufyrlcMrtDuHlRCkWtvxFEWewI3RHw4hfjUI_qLAhTHFKiiAVY8EIsGjxXjU8U5ISvpeKLY4wUOE-RQjZE0xSDYSeuI-xv8PW8WyiZjJBk8Ws4KhQqgwVwlSrhWoH9HyzE4_a6r5U0MITeW2o19sgKkToxtrpnzie3zeIHd66MRZg=w1280-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/4Y2eqRVryaLQHtmty9JHC6pEC7jhg2D8gRG1qsrlEGEoAsZJMnmXTbHtbdHU1SWg-l0msDox2k-EbCG5xE9ISzj88jCmmTsysVATTvdlFUbj_8v0zhT62ZJDEUOPW7DsPacFl-3RMYzGj0dP7DKTIPyjT6xwlJ5AP-4lLqUHzcdB__Fbmc48NjCsk4Yed1vwCuldB80Co4rAguxElQyEaVflvxifzhuke3pI3_uGJXZ20V6kJa7clnLfrTh_a69Bm3invYC_nokOVhMhnUiNrfikko1475xSKj8t3JxNjvr2c49RmuQbpgq0hF2XScjkSF1Of_1F3vJzF1ysWfqwebhUcnRnD6uv-Vk9BwPynydLCyqa51mtC4faPV0zsHx-C_jbybqLg3qQiQGgM1NHyc1VwmQ6xKKYm6Vyu7My_8ioj3RGiRWQUBksWJeTDJeHr4dEOCX4B4THwrnE-dl0L8bfzRkTQXvjtG9djYbpBkV-wH210CicEFPmqkx52C8QwjdRMsBmv2RPGXb-KH7BFIHMNpv66ygyCQV_tRHSX78Txg5fenKu2c2VI3JikGEtINcMs4Bz9GibLLxgW_aOWNrGf5NdmQJqpW1MpQZbT-7BYzI3D68HZocYkUY8ib_OfKMSVfHYNMS79TOtjQVlBVVTxLjuUZrAe9OpSyXlvsjLAd2R5KoSBg=w1280-h958-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/6Lb_NusdaC-PoACvIrJpRFObsuLYY3QV3AEb-0sOyYDx5yjX08Mkl80UyqnK6tFws9tye5PiP9_mYYF3-tDeyr-52qVg8K5rbIuqJQvvmRBAdIy1wdevYPUlGQfgb17JU4GmmO88DLJVXZ8UzlkIp9tc9YbcFMdPBQQP8PBjHskQ8Is9OpcEZuCoS_JEGmUQBQTL9Q-UW9dNvvfqBUGJgo8xjpdfcKYT2SVb429ChbUZyoBzxSwAXIjq2ACBri1qk8UbMeYdEqZViENorJhANTx8x9SsId4qPIB-0-cnGwY-QzKhGqqD8a0Jw5DYv-0v1CgXmKPEUi70J1VOBlwxLZDX4VVx2U26jcGJHxvGymgn6j9LF5RFY0uHmZQSxp_2D9NDqCI9sf65SgpNAmDBQMCl9IVIk_Zx91Ca-QvpRr2DQSZL3U4hVVDcmDvobw3l2pVY7byzgYEvhjcm5lX68yJBM-rAV6tYDa0vKBTbfCUt2ruf8jUtNsNYal3VpKvi4WyAibvNsygs2KR1LrjI760JSMRqSYqOuRchc6gCbvds8_9VsFOK2S_zdXdB2pkNTeozwfNitN5v8hovHmYgpdQt5dcXJGT533AMzRVDon0o99SD_aVm8s9H3UY5C2ZIhX5PHG8U2T3dR4_YQ8VqQkq3SGKdSWLr4JoLbvSijaTL4UIznKxu7A=w1280-h958-no",
  },
]

const interactiveSession = [
  {
    original:
      "https://lh3.googleusercontent.com/F6qjEbEloicRZE5EH8iMfY1HRguzuYtGi28GznLQSHWNpxO4TA16WzfisQYcGcOnseoKxjHo8C0UzO43j9iWWOfrgYA63adm9Cv86_uiWik8Ix4N5tlwJm-0ObGaBZxJvT-k1xn_qzP9v2ZfQ_9hC0Lk8QbCp3zQLX7hnvmUMUQpfuA4tP0yKgMDQ4T2TObVv_typDpc7dDxzemVbxIIo6gbMhxNybOXr4cdH0jd8lndQ_X6wTZXxhGW0D-D4IAPHwtxRlFvtN4DBvru2-i_ZV8RoWBZYlzd6SgJtcXMx1NE9-Q6C4GCMGUOmz2VnPUTmdWEI8la40s9oFb1HC0glk5-nvusj9mQA9ef8-hs8IyQx2SouSF7FBFNcAC3Wbp5HKSnAJIdeYBkiFSDAgcU62XH-LB0mQzwdPlbt3dlYZ6rxy_egQssQpJAqLi6oTy67RLiHW9YBQUCa4tpnW7Jqh6Vm4_-jxu4IcIKvCW3d6Ih-ViLylqv5YdSn2jfZe3abFgvSTtmYcwJ0G9Vtt5aqyTDvr_B1Sh3yvsiuZzSUncWxgM1Ygj-UAmoanWOQPvjvC_GmRmJnWG-BjNr5Ewag4f9wN-vAanIY2Tcgq-51hCYuYy1VZuHU4cn6aXU9ieG2eNgBumrMgVZcRkMGrJevLQvzHMQJb8JTyiWAhevAg5GVTrcF4qFUA=w600-h800-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/5YF-AeqVe4LkP7VQ5ZrV7iPNjOKvI2U3tiaO3T4ddIxNlnKSFQaeusldSnPOv04merknsM_LYEzOwdY5R99xpd0j5aIHrlWqZIz5Iok_LYUHMUbDiGZgss3pT4vu4BhBPkFkAOhbLnt5DUVmFTwrXa0icBRauLkNdRE96tXJ0cNqedKlOcVEFd4qjMTZH_JJRWhZJ4qey9J8g_1M7n8HNJesDHzQjats_wy3HDOWxAqGPCgGkVkJDsXZb2KtzKPGI0bjdZWTSk-raoRJshCL8EUsZp33WEiqX6CzAKzb2rbxf9CYLD8dfL2rYWOtrep6Vnsv_NaP1OcNFgwn62Gj7Z28BzHmLV_tnh_ocnnkrAiHCfivrwcXG6DZu84BKhbHQdzRWCC8EtcElWDl0It_NmyLtdmvY9Lh9omO0roWYpRh8VscHLxBiJWRRwmLDfWU4F5JdqRqbRgTkEQPZznNbq5cd-GOcQyHM6pTOsjrERSFV2oNt0YHFWV2a4J522zOH4LOghTRUvMaALYmR5d0r-dNPE7zAs-BFGP0dd3O6AttEovKPRmNPQB2YaO8L1BgdQ0Qma9GMsIBy6REtgsqltT59cKvIh1Ph5Kr0z-rv_PUAyIIum9nsAfLiGJ43M0UYYLAwp4TltO_KWlNgn4rkoKjkCvumY7q23Oa95qQ4v_klkYRD-sy2g=w449-h799-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/zQ-IfQ8I_7Fi88yYP_OvFtzP54EQErm5l1b2GXle-POCPEZNlzw872En8HqA8O1G6IIw4NE6QZmkVTfClaNXkybdnzsKGqTWoegyZFJ4OcGaR9wcXuIrs0rjrlbwDQJ96EWcg4DXRg_BjgtBapbH2gbf3UrnS0d4kRpbOBgFkOK3C1_g-gja6kh1vNX6ts5D1afbmVMzTAGJvgs3z8sVmuTlfu09WwACCLsksvUmaKoMMmmWqCZ7c7FrP7drTY-3o8yoba0aSxbD9ZBDQxxk4KuAMwu7OqSpTHei0ffjiATTVGLP9tccQgcMQ79fffRxQgzqJnmRVahTXDwTYyJdD0SPp6IsUkQ5iVmWvlk70wvxlFPZbRYLWM3E9wPVZ7yyejYV4BpCkdU74H89w5fPqWuIwMwt8mhkcgwOb33w65RzPq7gx37KZMIQp_CtfO3dohpde-83Xzho0LTCu8drQzBegCouWQaY0eI4VOTh7-fll6D5-_wFTxRUKRFb8uRM1vQTD1oqPVw8gBYUQ3ySDCnxW0HMQhRPufIkPeJBE1Q-obwSwQHMSooqjt1p92DqzZeWhVxKEXLMPofKojdTpuQZDESu3cyytcIi7eDkJeS5xdKrJ4jTBJNuRcgArIMC8tAQDDjL2W9iFsOrMGl0sVgQ5hvKu5biYHX48aI2sjZ-h85Q9K8GJg=w378-h672-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/U86uEDAclFIhCUIbkkVkieta3fN8Dg0z7wLP9kFIgpPv-LusCggUhXQuZOfc2ySGsscJVe6qTRtcTgJgEmFviIaiFrufqad3mVzy3YPi0ZAQCIHdHLcBGdXqZs3yD4Dh5bUmiPA3cq_4Is3CxG36Q_j6jjHUXJYcJmXoHiDo4A4s5gw9jfGQFh6klq-0KYukiNN1qqhiD2Wdw-5cMbNYTKDOCRvFswRoqLkut8s9d-XiH8zU0GZa1WlQrYx78HCIRbZNg0tauqgdeJJNpOORjZ8LBeX4o6y2_NF-AjqeN1HH02nnke0LDELbeQpczogMgCNEk1mvdp4hsH-jAkgxKMso0NGB__vqkuxTvvXbETMrjAecmxM5p80KdLT4esF7fRYjE_0mFH8PH09tBDCQxNcCg4UZTqMzq2rSrWHzaSizbk_THvDcbWtkrVoDIr_kHRHj4GW-Cc3j2NKVRWA-FsmQ4NkdVjoYyC02YR1FxIZR0o5xqJESNwIY3WnmRJmWA2OCs7NtIqRtZj-D0cd5fr5skwZJEP1X0DyI2OjF5rxEkq8WsEQnca_S-AZU7tnufvc9dDkefzptxLpe06S3fl7C8OY4hD6ETWiCJLrSg3Nb8YdSKN5kL8tQFMsZs7nvN-6xHiuQztzHt6M9_tti2MgQaWvZYc-g-IevuFscQj3cZJI86X6mag=w600-h800-no",
  },
]

const run = [
  {
    original:
      "https://lh3.googleusercontent.com/51EH2jck8UZNNTDhHb7-uLBI4HdQ1RWL6PulwNYU8VSq9j4-XTOUc_BB5_mYOZdrCLHp0vLa8pV8Y5F5gKivW0Cx7r3krop2Tb4fYMGEo9mxGdze134ooVarJ_If_fxisXAXZVnmPsaRj2Lw3yN-0TV3wVH2_4bfma0LlRXzCEDGW3qArKm1QFdmjhUFTaQupUaATrz-2NB8SDqsDErE-fz1JPdK2YWvgqsqp_v_qGlrvdXn63sLieCl5vNc2s0WxBU0vZ2Cmk1oxTL366r8F6M5MocxV6_F4WBoYBNcr7XLRiqkfRyEdMsbxom3lrrOJSiHFvJh3vOSap3zb4HUlA_jiHK5-kKCqdapKwQeXri5HVTUinN3FWpFjBNwV3m67xyl13YleljjO9Jw0CVPfvJXSWy2VLiynDFh0NXs6LHkhM61MkDb7x7b8sJ8sXdzpqimver6XzWmOuYWxwSxaq1Evy8rFuE2fsfQjCCJiN1OHXSE3atSSc5lwahRXAHFGHV-vy52n-QFYVMab92KY1qRhON5ZtSzOUAyjb1Q_7jIDkGur1bG-xg3Nmrr9pA53QCBcHnqLBpIH5zVaENl1DMrdbO_r_R_mQcIUrqnVxKeMBTvKYx1JEFLg1Jlo8W82wJc2YLYq-TjuQ3msVDo5fJziyqiSQDuD4ZajExpjMREHP9b3Swnjw=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/FzY0_IS76TeWp8HbC90VMLrWLQAcuYCF3aWrJKO4ZM76Guf0LMByVW0U6kqbV-4yUkQ1_F2_MXv5Mqe4SxxcFukgdb2OKq9_FaOCd_rP99uvbBBEKT-fEg0-0b6WZaQ_08pZUB3W4RRO2kirjYn0GR6QPRJC3ROxX1bdS4Ghws8rLYibLOEzkccwDuTEFEeyKWREcrZIqo2VSwDxa5frFIqZKo5U-50bOqIwmxYyT5U2uOZ-HnHrYCaJ_nCJy5g26-Z8VFbSu1HbJAqSjSgOVrYJaET3SP6r5larmjTl44k-pdSgc9bhwUvBQ4omU6hr02NeZ4hlZFycHnRfr3E26H0clYTMVVhutn8JSjV1WrYDYgEM1nrPkA7G4E4FyEhHaJzKacIsYO-uqm7rclAxqeaBH6y2gT7XoBjWa0xujg8hJ6kUF0sxYkfslVyjOPCbiTKPU_9Ok5jlC0Pj7pVGvd5sQeNLqHyQgvDu4kIx2Eb52H_tyYeFk6jsT0JTHnbLZZ7dZB7CRm8whfLaKTWAY4SpQ2wMIIrSLomdOfq8lxIaxfhCWHZTOZxi_1oSOO9jq2PiIpYdi9yqZSatYLa9SPFSHRFQZnkZf3-uOPrLmOKMU33zGLNc9xJkkQAB4f-JI0GijIeaCnBVz4T114uV5LcUEiJOdve_JFODnmeD0t0zXQ33RTYzcw=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/C3bQbWOjrP8_WHnmZGOqsu_nzIqAcmmUu679YrCxWyJSkFH116Fo41tFTOatD6ruQgwkTG-2d5I_9y2IO-AEGvfZZyvRbVY5xJ0gh5d1YKNuRLfDsKMHu9wEG4c9Xm9IKn4NCKb01AWARXenp2ro-ogMp4WhT8yaqcplErIh1VhBPoCPx1Ap4Mz9uH5mn0z71WbqHblJttgsz-H_vlw8XhCjWmD4kmQrcKYenpW7HGufK0tZofVcETNLxxLTSaWrfPNmlz3u4aNA2-a9vEdo9RMYmcXkg-igk-WFK7CfXlpwdMCaYeaM7tPxulNTmOqF9vCDeZMeCmNyeJhkRyxTQ3FgNbSNP5ZCaB-Uxs9af5qOu0qHzNjSPy59Q55x3G7FmE1-vftkx73hxqS7kCZMPnGkgkuVGSdt3lAUrVaYUxjTZ1xBjhU1ofPlKQDBYWFIhFePuZIdATZTI5TSB6VJ1vsJX348t1-rHa2lgIsNO9HXKfCFtVIxn3eMIPzDoTryCAhfTQWtdzHDVub35okf5Pl4A4qwbMcyGSnGJfLkYTvrfTqfIwiLqOwnP0MAfwvk6pBdTvi4KzEIxpNDl9ANDVWEiqaNgGnvVyvPNGiM5HTBWJgW4ZkW1lL9j8_JnjSVFvAriB8iNPxJjWAIip5uSwKURZGuhi4Vo2g0aMs9cBeyBdJM615MDg=w720-h480-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/e5P8EFZgiXM_Y9U9UcSSbhXZ6Fg42uQRD8u1M5sIBgOEpYw6BwQB8UnNAvqGEgDrL1Ua7NGvUTDXBDv5-K6E-1lBToH3qDB559SXTI_RoJIlb50gqMRriNgqrhZSsAwRObSGyNTHsuA47J5Si_xx5_5Ip74Tl62N-5a2XT4B_gjmJjXwXpJ3SuDKwZ6FP1VJzhXj8-9BW5mbSxOfshImGZImgBg3PnVz6lQn1q-EK-jNuO3ivt2xQL1jN2gPYMN9yM6okJZYdYTBZzJzTO9EzmIgX5SYGznNFmBJ5zuhrif5cm3x23t_XVJduh60JFdEfCY0RUhY1N7djcrIXQPnYUdgDq3drJe_TiKV-D-CpmrvOXbKVGFFZgcxpzROWVOA-h8qDb11xKW87jq0hDrMNo6vdJsVPgtVh4PbVR7D19VVUoPSY9Sq8pA0ukRUYRFzbrRh-Eb2dnImuwEPsLBFX2TyvPCPo9LYITO4HY-jHYiJQ28aWs7a_JK_ffQ6WGzI8__7G4gVaRIQbSnBEF2G3xuyqcHl2F2rHYyDj7Z2c4azKy7zJY8PpwS_hkdj23i1W_FEUNx4hYLOmY_Oyhd5iVw87TCrJEyNq08ffG6lLEu2jHy5ijjKQHYDnUGhU3A68XuBUvghHxNcqrRsEZgNjTtCU7KhwDYpXwCCxfAjCYZhHdMixZl-lQ=w720-h480-no",
  },
]

const erudite = [
  {
    original:
      "https://lh3.googleusercontent.com/C4i4rvkjxxJZ36wa59vDI-wtsbW_UEIFZDxv257JEFO8sc4_PdoUuM8o2Y7xgDgIyN95TaSKSFqvhJNO_ct2e99WwO7QGKJYebZUku7j-Myii3P6SQi6Um9anyMfeQ8jBUYYJnAjovuM_p_gMHzrsiCox7pe4h4Hf3eqgHNB5g4uF8d1RDNT6H_q4E9beiWg4U5FXuW1dqTw73BQeoiYGf_IWDzhiEgd8oDHJ8EaWkDN7Ufuh3lOVqqVptGO13-SlhV9bEfotSVjuS4PnnFGSDWRw2vxrvmtJCH36A4CKv2kY1hKVmMQqQ3RxkrUoAebXtBKEq2Vox_h_Jyk13fnr46nveDWkon629m11QbOmN2dAS7CsX_kK8vWYzESzvMwUk4VJDZjqA6nekpB8XVnlfbBLJ1IoW-VOQeMzqGezSIKWjQtUnHoaJg3qdgL0UpsT_yVIJuNe3jAP6hLc57qL31HLWPD7JFuEyn_ou9O9biHqKVIGGlDC8It4x2c3FEZuUx9h2N_X1-s6SBaXecq_CpH8NUe1dU19cLAe3hmcTeDnaeRryC4CP7OR34VcZlSHEpjRykGpVJAwP2NW0t11ZrMVyIk4WhBUd3mEwH6cLjA6yrVCevXzNErkFA6CSL2n0J42utaT4fGy_DjG9IojOaRM8HC1XpHfp4nMcvNOmtd7G0QPKGteg=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/xnR4DCZJKHaceQpDsUAgHIrSfiZqz83L0JBmV5V3Fs_m7UuI0Zl2Kx53UOkCngK3Z_YbEeI6cEBrM4AiHb1iJXKxLxJIXx7UhsG8XsWxD0ocsxOVwhYN8jSGljiF66RwnVYOnORO4n7g4QBalSklzOg0-8I1rNkZG0P3VLQJG0aXmeoFHGLSStH3Qvi4C_Yd08bnebDGaz4Ar-B4QpXWys6g57Xh1sTyKDhOH7-o_tzIm6_0OXe5YyyxWGVm2ZjiibAH8p-zNnmUCwWgyB1ALrRvV38Vuo_BYEXTd1iPV9FQKNt-2bz6gYR5BgPGC7I-qyJkzeEm5nWF-AIQEx-kekk_HIDFkq0ydu1Wq4gw4vUWRdGWdZG0F9Izn74_acbGszwZhFkt9gtWHmd8CwoaMmm6Ma8QByyoFmzScLb-gHOfA6iUzVaa2PAB3dnDL6_WyWBua-v2vbbbxE3IwCWIFo0yNHxQzRH5iM17dkdG_kT1siA2Y0aQqwlIXxC2KKEzVfi2irgQwe3bxjZfVmAdCllbUWA6b_2FbBk2I1puw2cfuDy_4e0xEuzwh1wNaMasHFWBxHvFQHG2uvae1O7ULENHIU0NUcllRKIr4MB7rIqmIL4Ori4gvPq85cUYKWHpUNCPfd9kcbLvCi3MzN2MX2U5Jktya5H7P_X66HNjCtFJSq4U2V6QGA=w348-h260-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/cps2SE7jt0J4E4rKcEqKqBw6wZUUsm111L2v43wgNclja2oKM-NAC2LkH_SdHUDrAUewa5rfhlHSEAxCERNDYKqU-amHFbV7cEFtN6m6kQaZDlZzFcw7JmnGM36n6dpDkGlcI8PSzMaN237rOgVrNuYcfC8fM7U0-OuIb-F7lZu2k5XtUQnLxAXpjQFw9IDbQmltPqI0mng7dvBATRF7mf-oqP76LzYch3bhokMEzPqP8CK-vhDLBiTWvwQDueHPPpex7bfL9rmGVi_PplzYMtFB1zeCojm3Oa1CuOs5Kdn0VtYsCMafMlWCv7IC5HX6fDrPsKmFpseEbQrWUWpEiiR1xushEaWqbeZnLDSuJvVQSfoSyiAOO6jpvjCz2R6xIqkRvYXnT5XLKrzueL-GuZMde8R38IfdwR8EdvQVHB36YzcRfvkCmnAwjt8-62k6-UZUctFtWfdP0Kprm1YTb95mpH-cl9E13BW9wWnfHJhNh0mFCwTqcGLp64cjIas0m7RR6Wq87eV8VU2HhuX_0HMp2f4y6OKYp9yHNOkuKT0BYljuTcat8_av21hfrejv3ztz6AJLzIMZ9c8HkR4kjian9mmu7SgzUGUrY4G6o6_wB7kw2ndsw58K3ENzb3NRE-3mRVrNjxsUvtxDqXjnmgneaOAfxXXnvTuRF7nBfvEFd58ARytHig=w720-h476-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/IdrKlUJY_zaCIXl1PvWPyW4y4j47FQUC0EWbksPgiopx4G1J-ogNjb-dmKMhd71c46KQ1in5mmh0GIOikKyuZ4vni5Rn2QkbMODELJmzIn_NldNY8qf6A8gcZIzQUH7QlYUW1lyP1JDfnJBqrP5gHO4wUG29uMD7BImVNWI-qnHwNQ9dDstBlF1oHmcKu752LAlGlJiIWmM-c9EHiyIY_g6BfSGM9cC447rYcnOLGfJsE30V_Of-jbOuu_5hM7oazIbKH5m5ijdwvFx0ezEEpoKY39W7LP9zee8P_vHK-VkhmjzidRuhtUvV_fCM2BlJggTJxHlsdSbIxfkhJLd86NvsY5HuUoBgaPTGZtO4Xjqox3KZLCJPWHuEwxNd84kD3txWacvm9MDeIXX5R0AzqzL5BPwbZ6D-IC1xK4lMAnrnK-3blCD7pd4k8jZPagK9qFE0pRgbNUPV162ZKxVkcRuy4PPqv9qQ-Hi_RmfGM68w7Kw3SP_HDuaKcNziuv4NbYwz6WUdtEd4AywjTGx-9O2CUKQpOoGtFEqQL4KKEg5fByUaQpVBlR8Wh15V-0jUMPtxF_QmIHpinNQrxb6BCz1_SUqcEU0_wPhAgd_HdJs-yQrW5n9V9KVh1gBnh4w-ziGH4Y313ahNOm5WL-3KWI6lu6LfyUCDODShLWBy9a_s15MZA8UqYA=w720-h476-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/Y5Qg7U4tfllYEIbBfsLhWXlHiCqG6aNevcVd7oxATv4NKvr-aXjVGyqSuQ3lsNHC0PD53T5HQfE0dlMVWdGwVX7ZpammhbyPZOv2bSF2T8qWXAL5VhLKHgBRj_nkfxihCqIHd9ePzB0sM-IS0MukvRTuC08Qf9vmml_yYu-jiSLL6vG8vDvi461BP5MvqlrVP1lZ61nnY5uFRuNykXyEeAqGrLeHacif3vXM5EaaBVzf8eYkfspvY0-tjqvPmFt8e2e157QV4mKYe-R9yzLTBHN0Bc-JgJR5EHJorykbgGR8ZFmOen9Bay87U5Y7cNuVNfoFuk4l6hs2mte-lHTGWo2b64rDfxETSfbYfSiZKHCrwQOswouOT_UsmksZAHWSUh_92v0hSSI3L4D9xYrmfs-Vk1KDLKaV3g_QyCuwsXfzUv_Mn4fGCoPSSLBm1xtKxMkhMLRRqPjnCIBvMUq9yhUSeexzyeNkPYSDKEQWUrZ4SGmSUio8AVUdwiuYAYsBCP5t_uvbBVZC_zokcF0iz4PnhPrtFkRKp5QbyUCy3qCT6XIvDCqr-N_MJmpw7RF5UsKFowNGWu-v8DsDJqSsVcgo2dp2gy3j0e0iy72j-k2j-6swAM_rBiIEcCbaJN8j8C7TQanGGGB43GNrF3M-gWt7OKisAjO9lGM7T6VNmXItT8gqJrzoNg=w720-h476-no",
  },
]

const korean = [
  {
    original:
      "https://lh3.googleusercontent.com/rQSIkHEM0toJELrsvJKC-8YzKjE4mr8n5t1ZZA0NmejWHzkZd6-sEy2nGfRi-obaXTBnfB2Wu77_OMuXsmkfNlY2c9ICUJquu6nkGHxadxn6Frv8cVAvU7Puf8-XpqBCugCqSE9G25yoeSsul0wD6kiihnO2po_rJoRwNKbnj5ryd57q2o-NADE9ciixhnLfP9sMDHxbrIcIyXOdA4ImXAoGMT8yFINdMsbbOtkHB6Up1EAVz5nD-H39Q9y3pdvqgMvGNodUJoWW2SsUWBVHmqLpus8ukoajcoLwPZuOlKBvsoG_KB5H8MamEafC5XuJbFy2-J4SfxzUalsA3Tejhikj_wtYYu1nlc1dEZpZYgBCNdHkSgsglfVcCUksKnFYtTWzigmNLnfZlcgOWM2cOHZ7guvJbNt1XnXEWP6m4PEf9GwKpLObdW2maJoDsNtWviVnrdNnCl9GLsbi85ChlCjOyvTS3QRqCzJ7U7F_x1YUf6EOnwK31nKXuuAq2bI7YDY52PH823gXIwIPtrQgOdE0tp0bduXfRVsoY8PpuVv-YBiRdeaFKhXkr--Yy5HidZZ_Yr_vpjDBesPCVPCJXVftRqCDI8y_PDGRTAMtNz4QPLPEr_F_ZXuzlnhEn6qOnxXGDqaS5m-k_74HaeLBDoHvXzqyMJN4tvsjM0WX7X1aOd43mgKfKg=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/oJCf7zbpKlw5TqXYp7GiyLXAhMr2zJhdnuaCqBd8yd_jWwuL9YPtC_5cPniZf5Yi9MHIYQkR3uTRjPkh9T5sj0JhQGddqfJ0wz_U1xagiT5-e2au9bhhdtH6rRID8xV_-t-KLboPIl8vkNgPd8jjcTcevEAN9kfsD7mH3yPlO-uPGZXXBC-QZve5oMmFm8EwAE-r8WEd7ABpo23tGJHeiGaffW9Q8SDiVrMafuLaB0p13kIbz6Nc4DU5Yc1uoo6-_neXcrG3Lj-BeRuAazogEQ9nR6MLACpr44Bg00eKtJVcRM-zZLiii7ust8wsMuhg1W1LIewY1Zl3qIJJc6QM9Y0wpbB5I_cWLk12P9H91_mAzt0KMgrjpP-WDrvDbM6VVl3fT3Wza1WVC1lAc-7yxBEA7LPLidFb49sfqe8KXefbCShhQjt_iea-CkVSI-FrcWFlN2hvIXWjaRAXUiydgnPaO8FMq2xyCbwTXKlGeeZ3ZA2RXU62z7nxfgqPNTksgIVe2WxBtZjCkPdV9LbV7gpbLfQv-CMeCHn82uth7z_SeFo8yz63H517DXRbb8VxwHIAwc7P6L2C4YcOiHjiuOq6CPa1lPSUGXdt95RDnSVDly78s_4JB5_ySBYTaVvLBz90zS2w7QfKEPuNzE6eUbUgpUJzJNxgFhnGL1yDMlr8TPdsMvEchw=w720-h960-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/NCFskfhxDEyykI_jfuzbd3lAtdLkKpCUHGrK9vc-wN0RG_oAywpsqE08-P50-BTKK8b3HJqU5qJzGZPiM-dpkhrP80jkMbnSyQUFfkhH0ROkJp97qqKwrSwfZN9H3aRLKrdpjQCKv68iaErKX5-d-MiAJa4-qaEQylumXybYlv3iFiK9nPe2rN7CEko6lr7uu7huCPuOl9i_iW2nj0hHdFk0B58qIB-yYm5m38rwKY0J_ynzdxRPaSqmg50lLKHzNRlDnwk-x1RqbiyCWavrC5TVZ-gW1Sfg42ckqg_aqRtGtJtbsGhll-TftgXBkdXRXiN1Hp0WUTFs4ybif6qi6JQtpnUo57wfyv5jCMCSsm4sR8PFvToSCP5MYJ4Bu7t5s_V5urLOAI8g-2jpMwGoXnytSGdELSyfDrp9-moSZfNz57pvmi34HTFSUXL56qX1n9qc8NXGHHQWSKhyV89T_w361_6jDILtQK0hvirUxIwAnyfwtdvVaHsMiG3K5fDxruz72xhfMs3_YypS4cjpoHIm2Q4eKULz6ygHixN21BOdmWU9waHmAOQKD-cnRP1nJ9ugwB1r9jAovQ--nnQxPoaJeGQbZy_Gz0qXLtGsyDO30dVV0Y-kaM3Z_xa55r0JzFPSEqPNGsH9jWNX0HO5Eas7tRL34ZkYamqjiBUZD-QQ3GUlfq1aag=w720-h540-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/1-azAA_gAsskW9U9zGrEvYSMEnRAdug_ptLHQjQgebH1za1HevHkjVoAy2EzrkQknkWJhNeetoiMUx6CDj1SiTOfUXT2CSzkeGyF6aWNgu8z7OBndClFaEAEWdc9HNArPXB6kMMPNQ9EmodyYi8OchbC6ZorUybZxKFLFnVkd03jKv-MQsV5wDYhWAHhgaD4V5OmzZTqeqDnBCUF8mmip5ZaGfRWVHcEJ6tkUxpklNrI12mr1F6oOJrq7UOeoEJXgam2mYac-RwPmLLqkNQze0bx74aFUQtILGliX0FgW21GOfIKIW7pMvrSQUYSGpuouKmiQkKreo0CkfeWFSyXSCEh6YBeg8mU5ph3Ww2ISgsxb5FGF0iP9R7vxcNuhveRPlC_XL8JTSLn9x1vHixFpMR50MEzQTEFPcW5PgVa2iboSlkiHM5ha2J-m_gLEr2ot4Xt12H13saubM_5YH4UbcDfcHXCYaDOC7lesTiSQfG0zjeRv4yNESejLAjYmRY-zyaaKkcGre7IvbiphaiKFzUcvVLuybXF6F2mpRGjxtnZezO7dDrWz8I3RF8dgkb5MteS8hX5ODgiwID3M2PT6HjYDXb1N0NnLzI71FD8FAkhPMdBldYPnFPL_LcCEYpIk-xDIZeUZmiQUnuwox6s0sDCmzBK4NIQLFnlnbdbtm5nnLUuzEiM-A=w720-h540-no",
  },
]

const mun = [
  {
    original:
      "https://lh3.googleusercontent.com/Hw_XL6owm3CCdzkJwGIeQASGUBzfO2jyVopwRelJliVCcMSMJ7sBRgcoJSlpQ8HlJc2l7lxAKTKWbZex7yPPxG9ee_pIeMN9o7uifi2EG6s63JghCG9t26rDeYKjCv7qzmbyMJbCMJu7Nq5WJyOJX5BFPlb7_8F7qm1RQyKb1hiGHI0rXu3sAio6mv19FYlCbyESk8uFAed_Aw7xKjGfA0TdaRJlZ5NowQBjO_5th4BpI6UYWnhXatBEnQO991Q20bJz8sMAsmMmDCkKT-RYReCaWG3qYLsvQPKJNQ0ktw5MP7Q-QWJmULCdvKviF4W01VPg48AsqRKh24UYJOv0ba7ygf_IrfFZSLJWpoeT-rd_IDICQzAGq4y3xe0snhVSdXIRGAMGRtnyfdb5FJMsOjVd4_F5QTw1EvhX8U0wxcicaq2d-zAZ2QFyYGJGMFFY54Llgil3BW6AFB34V4xgSRCQFxexQnzx6-2HtpIh5cuBSROpDkgGhJvOChMw8Ayy1VVCPljUwTQo5bWrs1TM2zTuS6C8ZUyp17qXTY5-qk8QZeNTyLxcMDrOG-WTayrbiQkYpQgy28d8mSZA9ubRrnFHaPnCeH845NXugLpk65kR3xqiYRllsvw2S7gyTlDOW4nTAydmFmh7c_rYn6o-RaFYibOckwRujRrNju0b5mJNSmVF8yWoJA=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/ki0PERbt_UvpSpIq4PyYWpSb5blU2Dj1NWk2ObjfiIOhSduUOPKynL6WhobF0HIzXS3wthlc6CzC_6Dsl1_uvfSx05rrQHLVEhGyI7KNCGwvEsOd5EKDZS9KYef_uoQ_B35k0kFpGE6nHRpoE2_At4-xhjbDk_eDBp-YKYkn6rM-PdhDt51E8gxpw1iMkp6UTvrc1RPRS7HHDHj-Wnto3Jot7inshqLFr4YmCuTBR4_5Fnu1swsk2OtFLJY_ivYDjO8Kh6kYrFxmdxJ1WI8Ab-ISdoqjnEhyuPlNk7-gVdS_tGJfPJwfNsB4k8GVdDQ5_6aePXvmnVu_qpKCPePIY-I312K5P3z9IMR_ujnDgyQ0FeizegLD1cOcBO6J0tJrHkHWVSXkjdjfQgRO0HpLAhB1ee_9UR5rUJXv_cMVhGQiYz6jSqBQrMHoOFKneh7MYO8e0vl_UCXwCmY2rM7VTZgj3wST43lleT-Bgb_d-667rbHPfzZkLtcFi2fpRv4h0rSsNjTQiokZ1lFG8P9wA0nK8L_5bSY6CpU-95RZ5-X5pJh7a_do8hKtuGYOgJJkSse89VU3SEiVo7-Xe_IB9C6MXnsQOFyxscWJTvqqWtIzp5cO1nnvpDVEoHAKCB5I4Wl3KJX_HIc0OkZyHnofjZy9vgRzjI8carfNYsyrchaCPAlHoRzzaQ=w1280-h853-no",
  },
  {
    original:
      "https://lh3.googleusercontent.com/wquYVx0d7KzY1gjxXVQicxiXcVKypMWtUQr0DLnPLgClnI5ZS0tRtK3uetblZQJsMMm5mAMhxn5IZjMd4WunVyefRV-9w5o6DlTKXWfQd_GyLx9YihOUh0GYohznie8QqlOheFxRwenMcBkkAA_WTGYehAbOc-nA-nYA1uTgx1APi0VZx5Kuwh8l_oRVh5FIEF_fqiK7p-oruAWXynVe3BgQ8W2TD0f5ngFBlophWMHDa-rP-yYFaYLNdWGbGkTP3v-gfD3YQ--hdyaUXfUc7UbAiO-YdxTKtG-uLWK90NJ302Lw7l4utm9j_yKVnMwt_OPFqokB-96_baA_TKf_EfjcMwSctHDkKCEW15MyvPAcsXv1zYKIwguJdODUpg9oi1yoD8I7OFzboTNjkRUeyl_Ofp1ty3Epcyfq5pkaUaap2RF6zqU8eHVgFrPufIGwsPoEio2CvCa1OA3Vgsx07OC6OSIvn8OY6Yl7f4tsnmOwL9ADS34prAwv6HJ-fiWGC3UoJskoEXxPmwM8ZQaHdAMnE9wSh7gzsexSPEFX-188_hHFrjd1gXB60gq9MO9Sxe57Z_GKEzeJGo8A5ez2GgDHWKuOn-I-LNs1K9xkouFtd7io6Rmh3lG_Zsm5vN3xwswUfDhPiajfi4-52b8rWYN4Ft_6h9_VMg_T17nf9JCroAOQUuXLQg=w663-h993-no",
  },
  {
    original:
      " https://lh3.googleusercontent.com/uvqkb2H2cjAhFFdP5y-Nu_8ksJzqQFkt_YGM_4m8mYLQT-PZKjbQwVQ9n4gbv1y6r3ZceqFokWbooCzteqpRHA2-4WGE0vHrIqSJIyl-Wj1VTsuSKvJdXHwxU4z0YY06HY0KsN9PEs5oxXO5lwxzHEQVduCQDwlLB4qHqGs7Xnx1k-9A4O1h3PsngmjvjlGo7F7H_IhfbY9BrK36BnnkFDErDYyj0Rp0BDhIk6NpbCe6z-OMzxAx6JLRrw7F8arkWu63KzcDEXm2dFF2ufNL46W22mtBSiomFhROwFD7tn4p1MBEUr-bZIU9I91fsl4UsIV7ESVhXOs-pXpZbep0zqDezlBuHGOiPbl8zUb98jREeRbTE4WxPAWWJ-vKbK8uV5wRuCR1zwdymtth1xQixUv_v1-2i_TU35p7fl4PVEjLybmjBLO32ByM0ftW6AASEX9S6f4w-dDmei6aw-trIlloeAoWucQysb51bhH8e1KC8KS1bLY6G3DfJQbFO_sznFE4ypPXaQUlQOkEY4jr-99aXjv1TENy_UE4m-90JmoUByGVi5YT6s8nlYoRIQt7hDcbZUDyu5TVl0ngIS6TZsXI4gaxF6dHoTt9L47MvVAgDW1lTuqf3F8dmZB4_b6yD391q4p4lzUC4gm47RUWvMxZ3XHdrUUxhKvtnIESF2PfUQ5mSjn8cQ=w1280-h853-no",
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

const uthan = [
  
  {
    original:'https://lh3.googleusercontent.com/fZob7vd1YCXVSc0r3KCPSZJ0o1Gah0Eck92O9sdPGvZPc94LVgeXMV_T9mU70dGtZ7CxcPe_hwjseOQx3tK42MNxIEL6nHED2ACMQmccP5hk8m4fsVPykbBt9f2zohM_tj0f0Kod2dgAvtm-LqiLGjED_GxFFS89XYP-CXwYxWvMcOXiJ3gNb1-k-iJaaLtkRhFwitXLKX16Aa-vMEy0LXT9cariXgOzdjNH8wDElTKWn_v98inCVFkTSw88LnIlp5XtsOmPF0rrzqLzFmWWFjdlVASllFuoFaUsozfomI5LBA_iKU4_Z72-wbxQzQNt-RsRLoaw4sS_d8NNnMAArg9ieDhYJat3Ry1HubokB1R6gXAqOjEL9Qleej7oi8Lup_T3g9zl0zWUZ2otSzCddpdqKkKnXcohLH-EKRh3SYlv5oe8-VxraWiPw8Ypp_UFTJSVQV09d6P5aMYvpAKmfxRrtl0EGIV2izhKWuuCDl3aYfTeRPjmMAW_2S0GsRqEDYCEGMArNomWyLEPa0tq1SshLGK7vCvUbv3p-MfKxA_pGZ5bKVKBs0EqLQZXN1LTN-1i1N1eiTZDNLE8tA9e5-yFBVRVHxZqZENAsrz2qsGQ5qeFsRIOUIS6xb9tgAg_k33jy6G-dpGdxsk9RqcRGM8_mDLIZKKlLtxMudJoDrcOgNsxRLz7yw=w1232-h816-no'
  },
  {
    original:'https://lh3.googleusercontent.com/b53hWJyjWp8kKmal85vgqiqko8WmPUnNCOL6i8G9Wq6vjlv-ba6xuCs6tP_JAzsnDJq0cQDySqLBPKJchIBONUf79giyoDZNgmkOQtEGl1Dn-hQ9xAIlgawm0k_Qz4IwzMWa-JhNJDj8vA17uBs0wlYs7HbNsvpvpezExTVYIsm_ZIgxB4BscB816nJjEsokSBQpvbVunYtWGrpAdhNP-BN8wc0log5vQrt5WthE1RNbbuIbAeEd13dUAbK6xffMLe-PfZ8l3oR1EMF8TN0F0LbjWh2Ie6ZovQysQXc5eqIRDmuMCCTvAr1mt9ID81VdDjApTKYhmlnFaGI4nILx3Jwx2JEuH5dpZNRqGOLwCF7v8Y5_1khNj8M61MhIyygzZisOfcRQEsbKx_gOnWM3LIUhEnTA-fz4V7vxHTercAoJKIy1Fq2DbtkRy4p1QCIHT9Nr5Um_OH6hPAuemv0jy7SsTn8_baivkxWyvWBFOsuYantZunfVe-SKx1kAbr-rgXzraV065kMjIvK9toM7Ryvn8NyNqpigDVqjmBl80FfPNIixpAmeFIUhpECKvJKU-1ur0UbRb_YPSfrY-jTUo3sUHdhNYL_Yp1_ayo59-QY3AlJk1ITDDaMMS2VJqdE5WrivyCqm9XgVPu0rwIyCnCDxSHuOg03Nns3NwCBBYokgvkepxkfBcg=w1232-h816-no'
  },
  {
    original:'https://lh3.googleusercontent.com/uiPimlRyNaXx5cqLOPN6YkZCXDIcZHCH-_kQJOON2YSm9zM9t-hz4HK_t5EqzrQua_cCrsm_HprTf9jbvg5-cFKkBItY9GduYs23_-kmTGAEo8fCuYFiqfh35jPtoMvFedIaPJFavn0vEiLMIg-LJ3HV4mnED2mGzx8H-Lya9YlBOJMyIq7FNnnK52nZChUGfWTpH7RU9IRm94XzEfOBot4IiFMLIw8WyXVK1UKrv8Z3Q_wNMlFAJkUHHDp2xMxrlnwtEfVO35ff9R6Tplr8QuT3zTBVnXaIw4bJh14plKgaYDQaI-0ACMrAhlhFjWUeM-OA49IJm1V6CrKZHDUesqhXZNmnyM3sAcDSC_H9pF3B9FQQhgcPH4odcpaQaUn6ga3WczzJGnyd5sH68K1dBU3W0pKmTLumk7BRAU14fmJWIGNAJaXKuIHZyDk_g0ZTIucT6EgKFmJYJQ1NkbOvOrLEjWqzM1_7Gjm2C6Ir6Gxd96O6mv6kCInC5GRcBLXYR2y7MtqL7-YA6x9-xKWC7awAAYOc-5_WUtZdDrzUj1ZEcn97SdHz-7Hb37a0I4Z6fXU-7B2PoYfqJmS7s7VUPPW6MnEUuvgMEEnr22G8pAb5y6kUusvDjWAtPe1Z3EDHkJLoObveNyZE4WDAXTuQInl-OcwkYtBEJIHCGTqHwVVY3wZKv9myXQ=w348-h260-no'
  },
  {
    original:'https://lh3.googleusercontent.com/-l77t-CrEQS_4WPPNVz4SpQiqGUMp5K3NGTvGnbEAv28f-vW-GQOwuplfqPJaUEN_4IS48vybw_uyYD4ftt7sbRGZl08KgM9c14rQRB6075owYnVCotixfGJxWoLJWCEGfD0C26-ZzLbicPmugsWOk8CxDyEnVVidjEWbPZOMe87HC_wC9UCm6j5wNeKP6thaPszupe6DtDGy_D7WAdBZ4RcKwaCr7FFGf1grK4KjJMeclC-QG6m7GPTqf5KAfS7iEqTpokKpwjmgGwvtwOvsUINoFRPsMypWxaN3Hv99DiXiDLsWLlYthVeg_9mczSo6xnQzK5FlmjjP9c3D3dzDvox9rOlm4wrayLnAy_xwtuB9flCx81y2NB0049V64R8tz5ZWHC9C_yUQfMPCip4LAkjR2ZjWPC8ueWyibx3IUDYi7Zr8TvmlJrrRntd4dh7eY3DfH60lPe-dE0KvGUA5cyAR5axe4ePknbcXO-df0nPoCdzA6qzWuT5BKU0G0Y0QeX2gJWaHCoFWms4i_rIdOaa7P6YOPsq2TACDQM1nxrjzleQ6oiekhS6xBxrgWNKSfwKBBqGvx-4hfl1lbt62z_FLMFn8qUjNwi59lugm8oFRhzpZIWi68j-C18GlASHAUdRS0A6taA23ORs0tu0j7FGrUA9CNhaW-baLjn-I8V0vppAsezJTA=w348-h260-no'
  }
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
                For and against gives birth to a parley And in parliament,
                dispute of words is considered a formal way. 'A good parliament
                is built with good debaters'. To provide a platform to many
                young debaters to showcase their talent, Team Unnati organized a
                Parliamentary Debate, where students from all over India
                participated in a huge figure. The chief guest for the event was
                Sharmishtha Mukherjee Ji, spokesperson of AICC Mentor for the
                event was Amrita Dhawan Ji, President of NSUI. The event ended
                auspiciously with the participation of more than 1300 students.
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
                Moreover, 1500 students and interns participated in the event
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
              <h5>Interactive Session</h5>
              <p>
                {" "}
                An Interactive Session was organized by Team Unnati. The event
                was successfully drawn to a close with the support of Mrs. Rama,
                Principal of Hans Raj College. More than 1700 students
                participated in the event
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
                students associated themselves with the event.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
          <div className={Styles.aboutCenter}>
            <article className={Styles.aboutImg}>
              <div className={Styles.imgContainer}>
                <ImageGallery
                  items={uthan}
                  showPlayButton={false}
                  showFullscreenButton={false}
                  showIndex={false}
                  infinite={false}
                />
              </div>
            </article>
            <article className={Styles.aboutInfo}>
              <h5>Uthan Youth Parliament</h5>
              <p>
                {" "}
                Unnati organized its first edition of UTHAN YOUTH PARLIAMENT on
                20-21st January'18 with the foremost motive to encourage healthy
                debate and deliberation. The conference was a simulation of four
                Indian committees namely Lok Sabha, National Security Council,
                All India Political Parties and Meet and stakeholders meet. The
                Uthan Youth Parliament was a success with the participation of
                more than 350 delegates from all over India. TIt was graced by
                the presence of eminent dignitaries like Mr. Eldo George
                Varghese, Mr. Vinod Kumar Meena(IPOS) and Mr. Sanil Sachar.
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
                different schools and University students.
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
                culture
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
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
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
              <h5>Samvidhan se vidhan tak</h5>
              <p>
                {" "}
                Failure to know and utilize the rights given to individuals
                often leads to their erosion and possibly getting themselves
                deeper into trouble..... So one must be well aware of their
                Constitution and the rights that it imparts us... "Samvidhan se
                Vidhan tak", a seminar on the rights that the Constitution gives
                us was organised by Unnati 28th November'18.
              </p>
            </article>
          </div>
        </section>

        <section className={Styles.about}>
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
