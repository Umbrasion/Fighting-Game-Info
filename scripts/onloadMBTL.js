var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<div class="selectbox-column">
		<a href="Powered_Ciel.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Powered_Ciel_icon.webp">
			</div>
		</a>
		<a href="Kohaku.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Kohaku_icon.webp">
			</div>
		</a>
		<div class="selectbox-spacer"></div>
	</div>
	<div class="selectbox-column" style="margin-top: 24px">
		<a href="Hisui_&_Kohaku.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Hisui_&_Kohaku_icon.webp">
			</div>
		</a>
		<a href="Miyako_Arima.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Miyako_Arima_icon.webp">
			</div>
		</a>
		<a href="Ushiwakamaru.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Ushiwakamaru_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column" style="margin-top: 48px">
		<a href="Akiha_Tohno.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Akiha_Tohno_icon.webp">
			</div>
		</a>
		<a href="Kouma_Kishima.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Kouma_Kishima_icon.webp">
			</div>
		</a>
		<a href="Neco-Arc.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Neco-Arc_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column" style="margin-top: 72px">
		<a href="Arcueid_Brunestud.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Arcueid_Brunestud_icon.webp">
			</div>
		</a>
		<a href="Shiki_Tohno.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Shiki_Tohno_icon.webp">
			</div>
		</a>
		<a href="Mash_Kyrielight.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Mash_Kyrielight_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column" style="margin-top: 72px">
		<a href="Ciel.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Ciel_icon.webp">
			</div>
		</a>
		<a href="Michael_Roa_Valdamjong.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Michael_Roa_Valdamjong_icon.webp">
			</div>
		</a>
		<a href="Saber.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Saber_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column" style="margin-top: 48px">
		<a href="Noel.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Noel_icon.webp">
			</div>
		</a>
		<a href="Vlov_Arkhangel.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Vlov_Arkhangel_icon.webp">
			</div>
		</a>
		<a href="Aoko_Aozaki.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Aoko_Aozaki_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column" style="margin-top: 24px">
		<a href="Mario_Gallo_Bestino.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Mario_Gallo_Bestino_icon.webp">
			</div>
		</a>
		<a href="Dead_Apostle_Noel.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Dead_Apostle_Noel_icon.webp">
			</div>
		</a>
		<a href="The_Count_of_Monte_Cristo.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/The_Count_of_Monte_Cristo_icon.webp">
			</div>
		</a>
	</div>
	<div class="selectbox-column">
		<a href="Red_Arcueid.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Red_Arcueid_icon.webp">
			</div>
		</a>
		<a href="Hisui.html" class="selectbox-spacer">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Hisui_icon.webp">
			</div>
		</a>
		<a href="Random_Character.html">
			<div class="selectbox selectbox-character">
				<img src="../../img/characterSelect/mbtl/Random_icon.webp">
			</div>
		</a>
	</div>
</div>
`

/*characterList.innerHTML = `
<!-- Arcueid Brunestud -->
<a href="arcueidBrunestud.html" style="text-decoration: none">
	<div class="chrPreview arcSel"><div><span>Arcueid Brunestud</span></div></div>
</a>
<!-- Ciel -->
<a href="ciel.html" style="text-decoration: none">
	<div class="chrPreview cielSel"><div><span>Ciel</span></div></div>
</a>
<!-- Akiha Tohno -->
<a href="akihaTohno.html" style="text-decoration: none">
	<div class="chrPreview akihaSel"><div><span>Akiha Tohno</span></div></div>
</a>
<!-- Hisui & Kohaku -->
<a href="hisuiAndKohaku.html" style="text-decoration: none">
	<div class="chrPreview maidsSel"><div><span>Hisui &amp; Kohaku</span></div></div>
</a>
<!-- Shiki Tohno -->
<a href="shikiTohno.html" style="text-decoration: none">
	<div class="chrPreview shikiSel"><div><span>Shiki Tohno</span></div></div>
</a>
<!-- Kouma Kishima -->
<a href="koumaKishima.html" style="text-decoration: none">
	<div class="chrPreview koumaSel"><div><span>Kouma Kishima</span></div></div>
</a>
<!-- Noel -->
<a href="noel.html" style="text-decoration: none">
	<div class="chrPreview noelSel"><div><span>Noel</span></div></div>
</a>
<!-- Vlov Arkhangel -->
<a href="vlovArkhangel.html" style="text-decoration: none">
	<div class="chrPreview vlovSel"><div><span>Vlov Arkhangel</span></div></div>
</a>
<!-- Michael Roa Valdamjong -->
<a href="michaelRoaValdamjong.html" style="text-decoration: none">
	<div class="chrPreview roaSel"><div><span>Michael Roa Valdamjong</span></div></div>
</a>
<!-- Miyako Arima -->
<a href="miyakoArima.html" style="text-decoration: none">
	<div class="chrPreview miyakoSel"><div><span>Miyako Arima</span></div></div>
</a>
<!-- Hisui -->
<a href="hisui.html" style="text-decoration: none">
	<div class="chrPreview hisuiSel"><div><span>Hisui</span></div></div>
</a>
<!-- Kohaku -->
<a href="kohaku.html" style="text-decoration: none">
	<div class="chrPreview kohakuSel"><div><span>Kohaku</span></div></div>
</a>
<!-- Red Arcueid -->
<a href="redArcueid.html" style="text-decoration: none">
	<div class="chrPreview rArcSel"><div><span>Red Arcueid</span></div></div>
</a>
<!-- Saber -->
<a href="saber.html" style="text-decoration: none">
	<div class="chrPreview saberSel"><div><span>Saber</span></div></div>
</a>
<!-- Dead Apostle Noel -->
<a href="deadApostleNoel.html" style="text-decoration: none">
	<div class="chrPreview danSel"><div><span>Dead Apostle Noel</span></div></div>
</a>
<!-- Aoko Aozaki -->
<a href="aokoAozaki.html" style="text-decoration: none">
	<div class="chrPreview aokoSel"><div><span>Aoko Aozaki</span></div></div>
</a>
<!-- Powered Ciel -->
<a href="poweredCiel.html" style="text-decoration: none">
	<div class="chrPreview pCielSel"><div><span>Powered Ciel</span></div></div>
</a>
<!-- Mario Gallo Bestino -->
<a href="marioGalloBestino.html" style="text-decoration: none">
	<div class="chrPreview marioSel"><div><span>Mario Gallo Bestino</span></div></div>
</a>
<!-- Neco-Arc -->
<a href="necoArc.html" style="text-decoration: none">
	<div class="chrPreview necoSel"><div><span>Neco-Arc</span></div></div>
</a>
<!-- Mash Kyrielight -->
<a href="mashKyrielight.html" style="text-decoration: none">
	<div class="chrPreview mashSel"><div><span>Mash Kyrielight</span></div></div>
</a>
<!-- Ushiwakamaru -->
<a href="ushiwakamaru.html" style="text-decoration: none">
	<div class="chrPreview ushiSel"><div><span style="font-size: 10px">Ushiwakamaru</span></div></div>
</a>
<!-- The Count of Monte Cristo -->
<a href="theCountOfMonteCristo.html" style="text-decoration: none">
	<div class="chrPreview edmondSel"><div><span>The Count of Monte Cristo</span></div></div>
</a>
`;*/