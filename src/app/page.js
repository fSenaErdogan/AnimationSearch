"use client"

import SearchInput from "@/components/SearchInput";
import Results from "@/components/Results";
import {useEffect, useState} from "react";
import Animation from "@/components/Animation";

export default function Home() {

    const [results, setResults] = useState([])
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState(null)
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        setResults([
            {
                id: 1,
                content: "Sonbaharın hüzünlü atmosferi, renkli yaprakların yere düşüşüyle başlar. Yavaşça sararan ağaçların altında yürüyerek, doğanın değişimini hissedersiniz. Rüzgarın serin esintisiyle, yapraklar dans ederken, huzurlu bir melodi çalınır sanki. Gün batımında, gökyüzü tonlarca renge bürünür, bu doğa şöleni içindeki anı yaşamak insana dinginlik verir."
            },
            {
                id: 2,
                content: "Kahvesinin kokusuyla uyananlar bilir, sabahın taze enerjisiyle dolup taşan bir gün başlıyor demektir. İlk yudumu alırken, kahvenin sıcaklığı içinde huzurlu bir an yaşarsınız. Her damlasıyla uyanıklığınıza katkıda bulunan kahve, gün boyunca sizi motive eder. İşte o ilk 25 kelimeyi içeren cümleler, kahvenin büyülü dünyasını anlatıyor."
            },
            {
                id: 3,
                content: "Şehrin gürültüsünden uzaklaşıp doğanın kucaklayıcı sessizliğine adım atmak, ruhu dinlendirir. Ormanın derinliklerinde yürürken, kuşların melodisi kulaklarınızı okşar. Doğanın ritmiyle bütünleşirken, hayatın karmaşasından arınmak mümkün olur. Bu anlar, içsel bir huzurun kapılarını aralar."
            },
            {
                id: 4,
                content: "Kitap okumanın büyülü dünyasına adım atmak, farklı zamanlarda farklı hikayelerle buluşmaktır. Sayfalar arasında kaybolurken, karakterlerle duygusal bir bağ kurarsınız. Kitapların içinde gizli hazineleri keşfetmek, hayal gücünüzü genişletir. Okuma alışkanlığı, zihinsel bir yolculuğa çıkmanın en keyifli yollarından biridir."
            },
        ])
    }, []);

    useEffect(() => {
        if (search.length > 3) {
            setAnimation(true)
            setSearchResults(results.filter(item => item.content.includes(search)))
            setTimeout(() => {
                setAnimation(false)
            }, 1000)
        } else {
            setSearchResults([])
        }
    }, [search]);

    return (
        <div className="w-full h-screen bg-fuchsia-100 grid place-content-center">
            <div className="w-[600px] p-8 rounded-xl text-fuchsia-800 flex flex-col gap-6">
                <SearchInput search={search} setSearch={setSearch}/>

                <div className="h-[500px]">
                    {
                        (animation === false && searchResults?.length > 0) ? (
                            <Results results={searchResults}/>
                        ) : searchResults !== null && search !== null && (
                            <>
                                {
                                    animation === true ? (
                                        <div className="w-full h-full grid place-content-center bg-white rounded-xl">
                                            <Animation/>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            Arama sonucunda içerik bulunamadı
                                        </div>
                                    )
                                }
                            </>
                        )

                    }
                </div>
            </div>
        </div>
    );
}
