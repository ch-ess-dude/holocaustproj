export interface TimelineEntry {
  year: string
  title: string
  detail: string
  imageSrc?: string
  imagePlaceholder: string
  imageCaption: string
  imageAlt: string
}

export interface Person {
  name: string
  role: string
  detail: string
  imageSrc?: string
  imagePlaceholder: string
  imageAlt: string
}

export const timelineEntries: TimelineEntry[] = [
  {
    year: '1933',
    title: 'The Nazi Seizure of Power',
    detail:
      'On 30 January 1933, Adolf Hitler was appointed Chancellor of Germany. Within months, the regime opened Dachau - the first concentration camp - and launched a nationwide boycott of Jewish businesses. Civil liberties were suspended and the legal apparatus of persecution began to take shape.',
    imageSrc: '/images/t1-1933-boycott.jpg',
    imagePlaceholder: "Photograph: SA guards posted outside a Jewish-owned department store, Berlin, April 1933",
    imageCaption: 'Bundesarchiv, Bild 102-14469 / CC-BY-SA 3.0 DE - SA guards enforce the boycott of Jewish businesses, Berlin, April 1933.',
    imageAlt: 'SA guards standing outside a Jewish-owned department store during the Nazi boycott of Jewish businesses, Berlin, April 1933',
  },
  {
    year: '1935',
    title: 'The Nuremberg Laws',
    detail:
      'Passed on 15 September 1935 at the Nazi Party rally in Nuremberg, these laws stripped German Jews of their citizenship, prohibited marriage and sexual relations between Jews and non-Jews, and codified racial persecution into statute. Jews were now legally classified as subjects, not citizens.',
    imageSrc: '/images/t2-1935-nuremberg.jpg',
    imagePlaceholder: 'Document: Page from the Reich Law Gazette (Reichsgesetzblatt) publishing the Nuremberg Laws, September 1935',
    imageCaption: 'Reich Law Gazette, 16 September 1935, p. 1145. Public domain - German government document.',
    imageAlt: 'Page from the Reich Law Gazette (Reichsgesetzblatt) publishing the Nuremberg Laws on 16 September 1935',
  },
  {
    year: '1938',
    title: 'Kristallnacht',
    detail:
      'On the nights of 9-10 November 1938, a coordinated pogrom swept across Germany and Austria. Synagogues were burned, Jewish-owned shops were destroyed, and approximately 30,000 Jewish men were arrested and transported to concentration camps. The name - "Night of Broken Glass" - refers to the shattered shop windows that littered the streets.',
    imageSrc: '/images/t3-1938-kristallnacht.jpg',
    imagePlaceholder: 'Photograph: Interior of the destroyed Fasanenstrasse Synagogue, Berlin, November 1938',
    imageCaption: 'Interior of the Fasanenstrasse Synagogue, Berlin, destroyed during Kristallnacht, November 1938. Public domain.',
    imageAlt: 'Interior view of the destroyed Fasanenstrasse Synagogue in Berlin, devastated during Kristallnacht in November 1938',
  },
  {
    year: '1939',
    title: 'Invasion of Poland & the Ghettos',
    detail:
      'Germany invaded Poland on 1 September 1939, beginning the Second World War. In the occupied territories, the Nazi regime forced Jews into sealed urban ghettos - areas of severe overcrowding, starvation, and disease. The Warsaw Ghetto, the largest, imprisoned over 400,000 people at its peak.',
    imageSrc: '/images/t4-1939-warsaw-ghetto.jpg',
    imagePlaceholder: 'Photograph: The wall of the Warsaw Ghetto, 1940-41',
    imageCaption: 'Bundesarchiv, Bild 101I-134-0791-29A - The ghetto wall in Warsaw that enclosed the Jewish population, c. 1941.',
    imageAlt: 'The wall of the Warsaw Ghetto, which separated the Jewish population from the rest of the city, photographed circa 1941',
  },
  {
    year: '1941',
    title: 'Mass Shootings in the East',
    detail:
      'Following the German invasion of the Soviet Union (22 June 1941), SS mobile killing units known as Einsatzgruppen followed the advancing army and carried out mass shootings of Jews, Roma, Soviet officials, and others. At Babi Yar, a ravine near Kyiv, 33,771 Jews were murdered in two days (29-30 September 1941).',
    imageSrc: '/images/t5-1941-babiyar.jpg',
    imagePlaceholder: 'Photograph: Babi Yar ravine, Kyiv, 1943 - site of the September 1941 massacre',
    imageCaption: 'The Babi Yar ravine near Kyiv, photographed in 1943. Site of the massacre of 33,771 Jews on 29-30 September 1941. Public domain.',
    imageAlt: 'The Babi Yar ravine near Kyiv, Ukraine, site of the September 1941 mass murder of 33,771 Jewish people',
  },
  {
    year: '1942',
    title: 'The Wannsee Conference & Industrial Murder',
    detail:
      'On 20 January 1942, senior Nazi officials met at a villa in Wannsee, Berlin to coordinate the "Final Solution to the Jewish Question" - the total murder of European Jewry. Auschwitz-Birkenau and the Operation Reinhard camps (Treblinka, Sobibor, Belzec) became the centres of industrial-scale mass murder.',
    imageSrc: '/images/t6-1942-wannsee.jpg',
    imagePlaceholder: 'Photograph: The Wannsee House (Haus der Wannsee-Konferenz), Berlin - now a memorial and education centre',
    imageCaption: 'The Wannsee House, Berlin - now the House of the Wannsee Conference, a memorial and education centre. Wikimedia Commons / CC BY-SA.',
    imageAlt: 'The Wannsee House in Berlin, site of the Wannsee Conference of January 1942, now a Holocaust memorial and education centre',
  },
  {
    year: '1943',
    title: 'The Warsaw Ghetto Uprising',
    detail:
      'Between April and May 1943, the remaining inhabitants of the Warsaw Ghetto staged the largest Jewish armed revolt of the war. Knowing they faced deportation and death, fighters led by Mordechai Anielewicz held off German forces for nearly four weeks with improvised weapons before being overwhelmed.',
    imageSrc: '/images/t7-1943-uprising.jpg',
    imagePlaceholder: 'Photograph: From the Stroop Report, Warsaw Ghetto Uprising, 1943',
    imageCaption: 'Bundesarchiv - Photograph from the Stroop Report documenting the suppression of the Warsaw Ghetto Uprising, 1943. Public domain.',
    imageAlt: 'Photograph from the Stroop Report showing the aftermath of the Warsaw Ghetto Uprising, 1943',
  },
  {
    year: '1944',
    title: 'The Deportation of Hungarian Jews',
    detail:
      'Between May and July 1944, over 400,000 Hungarian Jews were deported to Auschwitz-Birkenau in a matter of weeks - one of the most concentrated mass deportations of the entire Holocaust. The majority were murdered on arrival. This period came close to the end of the war, making the speed and scale especially stark.',
    imageSrc: '/images/t8-1944-hungarian.jpg',
    imagePlaceholder: 'Photograph: Child survivors of Auschwitz at the time of liberation, January 1945',
    imageCaption: 'Child survivors of Auschwitz photographed at the time of liberation, January 1945. Public domain - US Army.',
    imageAlt: 'Child survivors of Auschwitz-Birkenau photographed at the time of the Soviet liberation of the camp, January 1945',
  },
  {
    year: '1945',
    title: 'Liberation',
    detail:
      'On 27 January 1945, Soviet forces liberated Auschwitz-Birkenau. In the following weeks, Allied troops reached Bergen-Belsen, Dachau, and other camps, confronting conditions of extreme suffering. Germany surrendered unconditionally on 8 May 1945 - now observed as Holocaust Remembrance Day in many countries.',
    imageSrc: '/images/t9-1945-liberation.jpg',
    imagePlaceholder: 'Photograph: American forces at the liberation of Dachau concentration camp, April 1945',
    imageCaption: 'American forces at Dachau concentration camp following its liberation, April 1945. US Army / Public domain.',
    imageAlt: 'American forces at Dachau concentration camp following its liberation by the United States Army in April 1945',
  },
  {
    year: '1945-46',
    title: 'The Nuremberg Trials',
    detail:
      'Beginning in November 1945, the International Military Tribunal at Nuremberg prosecuted twenty-four leading members of the Nazi regime for crimes against peace, war crimes, and crimes against humanity - a category of law largely defined by these proceedings. The trials established a foundational precedent for international criminal justice.',
    imageSrc: '/images/t10-nuremberg-trials.jpg',
    imagePlaceholder: 'Photograph: The Nuremberg Trials courtroom, 1945-46',
    imageCaption: 'The Nuremberg Trials courtroom, 1945-46. US Army Signal Corps / National Archives. Public domain.',
    imageAlt: 'The Nuremberg Trials courtroom showing the defendants in the dock, 1945-1946',
  },
]

export const perpetrators: Person[] = [
  {
    name: 'Adolf Hitler',
    role: 'Führer of Nazi Germany (1934-1945)',
    detail:
      'As head of state and supreme commander, Hitler was the chief instigator of the Holocaust. His ideological obsession with racial antisemitism, expressed in writings and speeches from the 1920s onward, provided the framework within which genocide became state policy.',
    imageSrc: '/images/p-hitler.jpg',
    imagePlaceholder: 'Portrait photograph of Adolf Hitler',
    imageAlt: 'Portrait of Adolf Hitler',
  },
  {
    name: 'Heinrich Himmler',
    role: 'Head of the SS',
    detail:
      'Himmler commanded the Schutzstaffel (SS) and its vast apparatus, which administered the concentration and extermination camp system. He was the principal operational architect of the Holocaust, overseeing both the Einsatzgruppen mobile killing units and the death camps.',
    imageSrc: '/images/p-himmler.jpg',
    imagePlaceholder: 'Portrait photograph of Heinrich Himmler',
    imageAlt: 'Portrait of Heinrich Himmler',
  },
  {
    name: 'Hermann Göring',
    role: 'Reich Marshal; Luftwaffe Commander-in-Chief',
    detail:
      'One of the most senior figures in the Nazi hierarchy, Göring signed the order authorising Heydrich to plan the "Final Solution" in July 1941. He was found guilty on all four counts at the Nuremberg Trials and sentenced to death.',
    imageSrc: '/images/p-goering.jpg',
    imagePlaceholder: 'Portrait photograph of Hermann Göring',
    imageAlt: 'Portrait of Hermann Göring',
  },
  {
    name: 'Reinhard Heydrich',
    role: 'Head of the Reich Security Main Office (RSHA)',
    detail:
      'Heydrich chaired the Wannsee Conference of January 1942 and was a principal architect of the systematic murder of European Jews. He commanded the Einsatzgruppen operations in the East and coordinated the administrative machinery of the "Final Solution."',
    imageSrc: '/images/p-heydrich.jpg',
    imagePlaceholder: 'Portrait photograph of Reinhard Heydrich',
    imageAlt: 'Portrait of Reinhard Heydrich',
  },
  {
    name: 'Adolf Eichmann',
    role: 'Head of Gestapo Section IV B4 (Jewish Affairs)',
    detail:
      'Eichmann was the chief logistician of the Holocaust, organising the mass deportations of Jews across occupied Europe to the extermination camps. He was captured by Israeli intelligence in Argentina in 1960, tried in Jerusalem in 1961, and executed in 1962.',
    imageSrc: '/images/p-eichmann.jpg',
    imagePlaceholder: 'Portrait photograph of Adolf Eichmann',
    imageAlt: 'Portrait of Adolf Eichmann',
  },
]

export const victims: Person[] = [
  {
    name: 'Anne Frank',
    role: 'Diarist; born Frankfurt, 1929; died Bergen-Belsen, 1945',
    detail:
      'Anne Frank hid with her family in a concealed annex in Amsterdam for over two years before being discovered and deported. Her diary, kept during the years in hiding and published by her father Otto after the war, is one of the most widely read accounts of the Holocaust.',
    imageSrc: '/images/v-annefrank.jpg',
    imagePlaceholder: 'Portrait photograph of Anne Frank',
    imageAlt: 'Portrait photograph of Anne Frank, taken in May 1942',
  },
  {
    name: 'Elie Wiesel',
    role: 'Survivor; author; Nobel Peace laureate (1986)',
    detail:
      'Wiesel was deported from Sighetu Marmației in Romania to Auschwitz in 1944 at age fifteen. His memoir "Night" (1956, English 1960) is a landmark account of survival and loss. He spent decades as a witness and advocate, insisting that memory of the Holocaust must never fade.',
    imageSrc: '/images/v-wiesel.jpg',
    imagePlaceholder: 'Portrait photograph of Elie Wiesel',
    imageAlt: 'Portrait of Elie Wiesel',
  },
  {
    name: 'Primo Levi',
    role: 'Survivor; chemist; author',
    detail:
      'An Italian Jewish chemist, Levi was arrested in 1943 and deported to Auschwitz. His account "If This Is a Man" (1947) is an unflinching, precise, and deeply humanist examination of survival under dehumanising conditions. His work remains essential reading for understanding the Holocaust.',
    imageSrc: '/images/v-primolevi.jpg',
    imagePlaceholder: 'Portrait photograph of Primo Levi',
    imageAlt: 'Portrait of Primo Levi',
  },
]

export const rescuers: Person[] = [
  {
    name: 'Sophie Scholl & the White Rose',
    role: 'Student resistance movement, Munich, 1942-43',
    detail:
      'Sophie Scholl, her brother Hans, and fellow students distributed anti-Nazi leaflets at the University of Munich calling for passive resistance. They were arrested in February 1943, tried, and executed within days. Their courage remains a symbol of moral resistance within Germany itself.',
    imageSrc: '/images/r-scholl.jpg',
    imagePlaceholder: 'Portrait photograph of Sophie Scholl',
    imageAlt: 'Gestapo photograph of Sophie Scholl taken after her arrest in February 1943',
  },
  {
    name: 'Mordechai Anielewicz',
    role: 'Commander, Warsaw Ghetto Uprising',
    detail:
      "At twenty-three, Anielewicz led the Jewish Combat Organisation (ŻOB) during the Warsaw Ghetto Uprising of April-May 1943. He died in the bunker at 18 Mila Street when the Germans discovered the fighters' last stronghold. He is commemorated as a symbol of Jewish armed resistance.",
    imageSrc: '/images/r-anielewicz.jpg',
    imagePlaceholder: 'Portrait photograph of Mordechai Anielewicz',
    imageAlt: 'Portrait photograph of Mordechai Anielewicz, commander of the Warsaw Ghetto Uprising',
  },
  {
    name: 'Oskar Schindler',
    role: 'German industrialist; rescuer',
    detail:
      "A German businessman operating in occupied Poland, Schindler employed Jewish workers in his factories and used bribes and personal risk to shield them from deportation and murder. He is credited with saving approximately 1,200 Jews, documented in the \"Schindler's List.\"",
    imageSrc: '/images/r-schindler.jpg',
    imagePlaceholder: 'Portrait photograph of Oskar Schindler',
    imageAlt: 'Portrait photograph of Oskar Schindler',
  },
  {
    name: 'Irena Sendler',
    role: 'Polish social worker; rescuer',
    detail:
      "Working for a Polish social welfare organisation, Sendler smuggled approximately 2,500 Jewish children out of the Warsaw Ghetto, placing them with Polish families or in convents. She was arrested and tortured by the Gestapo in 1943 but refused to reveal the children's locations.",
    imageSrc: '/images/r-sendler.jpg',
    imagePlaceholder: 'Portrait photograph of Irena Sendler',
    imageAlt: 'Portrait photograph of Irena Sendler, Polish social worker who rescued Jewish children from the Warsaw Ghetto',
  },
]
