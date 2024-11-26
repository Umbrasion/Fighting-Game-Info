var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<a href="Suika_Ibuki.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Suika_Ibuki_icon.webp">
		</div>
	</a>
	<a href="Yukari_Yakumo.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Yukari_Yakumo_icon.webp">
		</div>
	</a>
	<a href="Yuyuko_Saigyouji.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Yuyuko_Saigyouji_icon.webp">
		</div>
	</a>
	<a href="Remilia_Scarlet.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Remilia_Scarlet_icon.webp">
		</div>
	</a>
	<a href="Youmu_Konpaku.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Youmu_Konpaku_icon.webp">
		</div>
	</a>
	<a href="Patchouli_Knowledge.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Patchouli_Knowledge_icon.webp">
		</div>
	</a>
	<a href="Alice_Margatroid.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Alice_Margatroid_icon.webp">
		</div>
	</a>
	<a href="Sakuya_Izayoi.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Sakuya_Izayoi_icon.webp">
		</div>
	</a>
	<a href="Marisa_Kirisame.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Marisa_Kirisame_icon.webp">
		</div>
	</a>
	<a href="Reimu_Hakurei.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Reimu_Hakurei_icon.webp">
		</div>
	</a>
	<a href="Sanae_Kochiya.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Sanae_Kochiya_icon.webp">
		</div>
	</a>
	<a href="Cirno.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Cirno_icon.webp">
		</div>
	</a>
	<a href="Hong_Meiling.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Hong_Meiling_icon.webp">
		</div>
	</a>
	<a href="Utsuho_Reiuji.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Utsuho_Reiuji_icon.webp">
		</div>
	</a>
	<a href="Suwako_Moriya.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Suwako_Moriya_icon.webp">
		</div>
	</a>
	<a href="Reisen_Udongein_Inaba.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Reisen_Udongein_Inaba_icon.webp">
		</div>
	</a>
	<a href="Aya_Shameimaru.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Aya_Shameimaru_icon.webp">
		</div>
	</a>
	<a href="Komachi_Onozuka.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Komachi_Onozuka_icon.webp">
		</div>
	</a>
	<a href="Iku_Nagae.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Iku_Nagae_icon.webp">
		</div>
	</a>
	<a href="Tenshi_Hinanawi.html">
		<div class="selectbox selectbox-character">
			<img src="../../img/characterSelect/soku/Tenshi_Hinanawi_icon.webp">
		</div>
	</a>
</div>
`

/*characterList.innerHTML = `
<!-- Reimu Hakurei -->
<a href="Reimu_Hakurei.html" style="text-decoration: none">
	<div class="chrPreview reimuSel"><div><span>Reimu Hakurei</span></div></div>
</a>
<!-- Marisa Kirisame -->
<a href="Marisa_Kirisame.html" style="text-decoration: none">
	<div class="chrPreview marisaSel"><div><span>Marisa Kirisame</span></div></div>
</a>
<!-- Sakuya Izayoi -->
<a href="Sakuya_Izayoi.html" style="text-decoration: none">
	<div class="chrPreview sakuyaSel"><div><span>Sakuya Izayoi</span></div></div>
</a>
<!-- Alice Margatroid -->
<a href="Alice_Margatroid.html" style="text-decoration: none">
	<div class="chrPreview aliceSel"><div><span>Alice Margatroid</span></div></div>
</a>
<!-- Patchouli Knowledge -->
<a href="Patchouli_Knowledge.html" style="text-decoration: none">
	<div class="chrPreview patchySel"><div><span>Patchouli Knowledge</span></div></div>
</a>
<!-- Youmu Konpaku -->
<a href="Youmu_Konpaku.html" style="text-decoration: none">
	<div class="chrPreview youmuSel"><div><span>Youmu Konpaku</span></div></div>
</a>
<!-- Remilia Scarlet -->
<a href="Remilia_Scarlet.html" style="text-decoration: none">
	<div class="chrPreview remiliaSel"><div><span>Remilia Scarlet</span></div></div>
</a>
<!-- Yuyuko Saigyouji -->
<a href="Yuyuko_Saigyouji.html" style="text-decoration: none">
	<div class="chrPreview yuyukoSel"><div><span>Yuyuko Saigyouji</span></div></div>
</a>
<!-- Yukari Yakumo -->
<a href="Yukari_Yakumo.html" style="text-decoration: none">
	<div class="chrPreview yukariSel"><div><span>Yukari Yakumo</span></div></div>
</a>
<!-- Suika Ibuki -->
<a href="Suika_Ibuki.html" style="text-decoration: none">
	<div class="chrPreview suikaSel"><div><span>Suika Ibuki</span></div></div>
</a>
<!-- Reisen Udongein Inaba -->
<a href="Reisen_Udongein_Inaba.html" style="text-decoration: none">
	<div class="chrPreview reisenSel"><div><span>Reisen Udongein Inaba</span></div></div>
</a>
<!-- Aya Shameimaru -->
<a href="Aya_Shameimaru.html" style="text-decoration: none">
	<div class="chrPreview ayaSel"><div><span style="font-size: 12px">Aya Shameimaru</span></div></div>
</a>
<!-- Komachi Onozuka -->
<a href="Komachi_Onozuka.html" style="text-decoration: none">
	<div class="chrPreview komachiSel"><div><span>Komachi Onozuka</span></div></div>
</a>
<!-- Iku Nagae -->
<a href="Iku_Nagae.html" style="text-decoration: none">
	<div class="chrPreview ikuSel"><div><span>Iku Nagae</span></div></div>
</a>
<!-- Tenshi Hinanawi -->
<a href="Tenshi_Hinanawi.html" style="text-decoration: none">
	<div class="chrPreview tenshiSel"><div><span>Tenshi Hinanawi</span></div></div>
</a>
<!-- Sanae Kochiya -->
<a href="Sanae_Kochiya.html" style="text-decoration: none">
	<div class="chrPreview sanaeSel"><div><span>Sanae Kochiya</span></div></div>
</a>
<!-- Cirno -->
<a href="Cirno.html" style="text-decoration: none">
	<div class="chrPreview cirnoSel"><div><span>Cirno</span></div></div>
</a>
<!-- Hong Meiling -->
<a href="Hong_Meiling.html" style="text-decoration: none">
	<div class="chrPreview meilingSel"><div><span>Hong Meiling</span></div></div>
</a>
<!-- Utsuho Reiuji -->
<a href="Utsuho_Reiuji.html" style="text-decoration: none">
	<div class="chrPreview okuuSel"><div><span>Utsuho Reiuji</span></div></div>
</a>
<!-- Suwako Moriya -->
<a href="Suwako_Moriya.html" style="text-decoration: none">
	<div class="chrPreview suwakoSel"><div><span>Suwako Moriya</span></div></div>
</a>
`;*/