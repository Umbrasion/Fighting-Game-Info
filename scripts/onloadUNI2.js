var characterList = document.getElementsByClassName("chrSelection")[0];

characterList.innerHTML = `
<div class="selectbox-container">
	<a href="Kuon.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Kuon_icon.webp">
		</div>
	</a>
	<a href="Phonon.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Phonon_icon.webp">
		</div>
	</a>
	<a href="Nanase.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Nanase_icon.webp">
		</div>
	</a>
	<a href="Seth.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Seth_icon.webp">
		</div>
	</a>
	<a href="Waldstein.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Waldstein_icon.webp">
		</div>
	</a>
	<a href="Hyde.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Hyde_icon.webp">
		</div>
	</a>
	<a href="Random_Character.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Random_icon.webp">
		</div>
	</a>
	<a href="Linne.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Linne_icon.webp">
		</div>
	</a>
	<a href="Carmine.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Carmine_icon.webp">
		</div>
	</a>
	<a href="Yuzuriha.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Yuzuriha_icon.webp">
		</div>
	</a>
	<a href="Byakuya.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Byakuya_icon.webp">
		</div>
	</a>
	<a href="Mika.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Mika_icon.webp">
		</div>
	</a>
	<a href="Kaguya.html">
		<div class="selectbox selectbox-character size-toprow">
			<img src="../../img/characterSelect/uni2/Kaguya_icon.webp">
		</div>
	</a>
	<a href="Eltnum.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Eltnum_icon.webp">
		</div>
	</a>
	<a href="Tsurugi.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Tsurugi_icon.webp">
		</div>
	</a>
	<a href="Hilda.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Hilda_icon.webp">
		</div>
	</a>
	<a href="Merkava.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Merkava_icon.webp">
		</div>
	</a>
	<a href="Orie.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Orie_icon.webp">
		</div>
	</a>
	<a href="Wagner.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Wagner_icon.webp">
		</div>
	</a>
	<a href="Uzuki.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Uzuki_icon.webp">
		</div>
	</a>
	<a href="Enkidu.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Enkidu_icon.webp">
		</div>
	</a>
	<a href="Gordeau.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Gordeau_icon.webp">
		</div>
	</a>
	<a href="Vatista.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Vatista_icon.webp">
		</div>
	</a>
	<a href="Chaos.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Chaos_icon.webp">
		</div>
	</a>
	<a href="Londrekia.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Londrekia_icon.webp">
		</div>
	</a>
	<a href="Akatsuki.html">
		<div class="selectbox selectbox-character size-bottomrow">
			<img src="../../img/characterSelect/uni2/Akatsuki_icon.webp">
		</div>
	</a>
</div>
`

/*characterList.innerHTML = `
<!-- Hyde -->
<a href="hyde.html" style="text-decoration: none">
	<div class="chrPreview hydeSel"><div><span>Hyde</span></div></div>
</a>
<!-- Linne -->
<a href="linne.html" style="text-decoration: none">
	<div class="chrPreview linneSel"><div><span>Linne</span></div></div>
</a>
<!-- Waldstein -->
<a href="waldstein.html" style="text-decoration: none">
	<div class="chrPreview waldsteinSel"><div><span>Waldstein</span></div></div>
</a>
<!-- Carmine -->
<a href="carmine.html" style="text-decoration: none">
	<div class="chrPreview carmineSel"><div><span>Carmine</span></div></div>
</a>
<!-- Orie -->
<a href="orie.html" style="text-decoration: none">
	<div class="chrPreview orieSel"><div><span>Orie</span></div></div>
</a>
<!-- Gordeau -->
<a href="gordeau.html" style="text-decoration: none">
	<div class="chrPreview gordeauSel"><div><span>Gordeau</span></div></div>
</a>
<!-- Merkava -->
<a href="merkava.html" style="text-decoration: none">
	<div class="chrPreview merkavaSel"><div><span>Merkava</span></div></div>
</a>
<!-- Vatista -->
<a href="vatista.html" style="text-decoration: none">
	<div class="chrPreview vatistaSel"><div><span>Vatista</span></div></div>
</a>
<!-- Seth -->
<a href="seth.html" style="text-decoration: none">
	<div class="chrPreview sethSel"><div><span>Seth</span></div></div>
</a>
<!-- Yuzuriha -->
<a href="yuzuriha.html" style="text-decoration: none">
	<div class="chrPreview yuzurihaSel"><div><span>Yuzuriha</span></div></div>
</a>
<!-- Hilda -->
<a href="hilda.html" style="text-decoration: none">
	<div class="chrPreview hildaSel"><div><span>Hilda</span></div></div>
</a>
<!-- Chaos -->
<a href="chaos.html" style="text-decoration: none">
	<div class="chrPreview chaosSel"><div><span>Chaos</span></div></div>
</a>
<!-- Nanase -->
<a href="nanase.html" style="text-decoration: none">
	<div class="chrPreview nanaseSel"><div><span>Nanase</span></div></div>
</a>
<!-- Byakuya -->
<a href="byakuya.html" style="text-decoration: none">
	<div class="chrPreview byakuyaSel"><div><span>Byakuya</span></div></div>
</a>
<!-- Phonon -->
<a href="phonon.html" style="text-decoration: none">
	<div class="chrPreview phononSel"><div><span>Phonon</span></div></div>
</a>
<!-- Mika -->
<a href="mika.html" style="text-decoration: none">
	<div class="chrPreview mikaSel"><div><span>Mika</span></div></div>
</a>
<!-- Wagner -->
<a href="wagner.html" style="text-decoration: none">
	<div class="chrPreview wagnerSel"><div><span>Wagner</span></div></div>
</a>
<!-- Enkidu -->
<a href="enkidu.html" style="text-decoration: none">
	<div class="chrPreview enkiduSel"><div><span>Enkidu</span></div></div>
</a>
<!-- Londrekia -->
<a href="londrekia.html" style="text-decoration: none">
	<div class="chrPreview drekiaSel"><div><span>Londrekia</span></div></div>
</a>
<!-- Tsurugi -->
<a href="tsurugi.html" style="text-decoration: none">
	<div class="chrPreview tsurugiSel"><div><span>Tsurugi</span></div></div>
</a>
<!-- Kaguya -->
<a href="kaguya.html" style="text-decoration: none">
	<div class="chrPreview kaguyaSel"><div><span>Kaguya</span></div></div>
</a>
<!-- Kuon -->
<a href="kuon.html" style="text-decoration: none">
	<div class="chrPreview kuonSel"><div><span>Kuon</span></div></div>
</a>
<!-- Uzuki -->
<a href="uzuki.html" style="text-decoration: none">
	<div class="chrPreview uzukiSel"><div><span>Uzuki</span></div></div>
</a>
<!-- Eltnum -->
<a href="eltnum.html" style="text-decoration: none">
	<div class="chrPreview eltnumSel"><div><span>Eltnum</span></div></div>
</a>
<!-- Akatsuki -->
<a href="akatsuki.html" style="text-decoration: none">
	<div class="chrPreview akatsukiSel"><div><span>Akatsuki</span></div></div>
</a>
`;*/